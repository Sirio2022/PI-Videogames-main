var express = require("express");
const { apikey } = require("../db");
var router = express.Router();
const axios = require("axios");

router.get("/", async (req, res) => {
  var apiresultado = await axios.get(
    `https://api.rawg.io/api/platforms/lists/parents?key=${apikey}`
  );
  var apivgplatform = apiresultado.data.results.map((p) => p.name);
  res.send(apivgplatform);
});
module.exports = router;
