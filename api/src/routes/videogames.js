var express = require("express");
const { apikey, Videogame, Genre} = require("../db");
var router = express.Router();
const axios = require("axios");

router.get("/", async (req, res) => {
  const { name } = req.query;

  try {
    if (name) {
      let name2 = name.split(" ").join("-").toLowerCase();
      var apiresultado = await axios.get(
        `https://api.rawg.io/api/games?search=${name2}&key=${apikey}&page_size=100`
      );
      apiresultado = apiresultado.data.results;
    } else {
      async function SearchApi() {
        try {
          const promise1 = axios.get(
            `https://api.rawg.io/api/games?key=${apikey}&page=1&page_size=50`
          );
          const promise2 = axios.get(
            `https://api.rawg.io/api/games?key=${apikey}&page=2&page_size=50`
          );
          const promise3 = axios.get(
            `https://api.rawg.io/api/games?key=${apikey}&page=3&page_size=50`
          );

          await Promise.all([promise1, promise2, promise3]).then(function (
            values
          ) {
            apiresultado = values[0].data.results
              .concat(values[1].data.results)
              .concat(values[2].data.results);
          });
        } catch (err) {
          console.log("Error al buscar en la API: ", err);
        }
      }
      await SearchApi();
    }

    //Acá tenemos un array con los videojuegos de la API
    if (apiresultado.length > 0) {
      var apivgames = apiresultado.map((p) => {
        let b = [];
        for (i = 0; i < p.genres.length; i++) {
          b.push(p.genres[i].name);
        }
        return {
          id: p.id,
          name: p.name,
          image: p.background_image,
          genres: b.toString(),
          rating: p.rating,
          origin: "API",
        };
      });
      if (name) {
        apivgames = apivgames.filter((p) =>
          p.name.toLowerCase().includes(name.toLowerCase())
        );
      }
    } else var apivgames = [];

    // Acá un array con los personajes de la base de datos. Esto es a la hora de crear un videojuego.
    var dbvgames = [];
    dbvgames = await Videogame.findAll({
      include: {
        model: Genre,
        attributes: ["name"],
        through: { attributes: [] },
      },
    });
    if (name) {
      dbvgames = dbvgames.filter((p) =>
        p.name.toLowerCase().includes(name.toLowerCase())
      );
    }
    var dbvgames = dbvgames.map((p) => {
      let b = [];
      for (i = 0; i < p.genres.length; i++) {
        b.push(p.genres[i].name);
      }
      return {
        id: p.id,
        name: p.name,
        image:
          "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg",
        genres: b.toString(),
        rating: p.rating,
        origin: "DB",
      };
    });

    //Acá vamos a juntar los 2 arreglos.
    const allvgames = dbvgames.concat(apivgames);
    res.json(
      allvgames.length
        ? allvgames
        : "No se encontraron videojuegos con ese tipo de busqueda"
    );
  } catch (error) {
    res.send(`Error in route /videogames ${error}`);
  }
});

//Buscar el videojuego por ID
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    if (!isNaN(id)) {
      //Buscamos el videojuego en la API
      var idkey = parseInt(id);
      const result = await axios.get(
        `https://api.rawg.io/api/games/${idkey}?key=${apikey}`
      );
      if (result.data.id) {
        let genrestr = [];
        for (i = 0; i < result.data.genres.length; i++) {
          genrestr.push(result.data.genres[i].name);
        }
        let platformstr = [];
        for (i = 0; i < result.data.platforms.length; i++) {
          platformstr.push(result.data.platforms[i].platform.name);
        }
        const searchapivg = {
          name: result.data.name,
          platforms: platformstr.toString(),
          released: result.data.released,
          image: result.data.background_image,
          description: result.data.description.replace(/<[^>]+>/g, ""),
          rating: result.data.rating,
          genres: genrestr.toString(),
        };
        return res.status(200).json(searchapivg);
      }
    }

    //Buscamos el videojuego en la base de datos.
    var searchdbvg = await Videogame.findByPk(id, {
      include: [
        {
          model: Genre,
          attributes: ["name"],
          through: {
            attributes: [],
          },
        },
      ],
    });

    if (searchdbvg) {
      let genrestr = [];
      for (let i = 0; i < searchdbvg.genres.length; i++) {
        genrestr.push(searchdbvg.genres[i].name);
      }
      const objdbgame = {
        name: searchdbvg.name,
        platforms: searchdbvg.platform,
        released: searchdbvg.reldate,
        image:
          "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg",
        description: searchdbvg.description,
        rating: searchdbvg.rating,
        genres: genrestr.toString(),
        db: "Juego en DB"
      };
      return res.status(200).json(objdbgame);
    }
    return res.status(404).send("Videojuego no encontrado");
  } catch (error) {
    res.send(`Error in Rute /videogames:id ${error}`);
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  console.log("Delete de: ", id);
  try {
    const elem = await Videogame.findByPk(id);
    await elem.destroy(id);
    res.status(200).send("El videojuego fue eliminado");
  } catch (error) {
    res.send("No se puedo eliminar el juego");
  }
});

router.post("/", async (req, res) => {
  let { name, description, reldate, rating, platform, genre } = req.body;
  platform = platform.toString();
  const addVgame = await Videogame.create({
    name,
    description,
    reldate,
    rating,
    platform,
  });

  const vg_genre = await Genre.findAll({
    where: { name: genre },
  });

  addVgame.addGenre(vg_genre);

  res.send("El nuevo videojuego fue agregado correctamente");
});

module.exports = router;
