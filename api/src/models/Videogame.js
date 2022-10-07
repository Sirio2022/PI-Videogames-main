const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("videogame", {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },

    Nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    Descripción: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Fecha_de_lanzamiento: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    Rating: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Plataformas: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
