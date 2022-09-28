const router = require("express").Router();
const { Steam } = require("../../models");
const Op = require("sequelize").Op;
const axios = require("axios");
const purifier = require("../utils/oxiGame");
require("dotenv").config();

// GET /api/steam

router.get("/", async (req, res) => {
  // Access our User model and run .findAll() method)
  try {
    const steamData = await Steam.findAll();
    res.status(200).json(steamData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// get all games with a partial name match
router.get("/:name", async (req, res) => {
  try {
    let steamData = [];
    if (req.params.name.match(/^\s*\d+\s*$/g)) {
      steamData = await Steam.findAll({
        limit: 50,
        where: {
          appid: {
            [Op.like]: `${req.params.name.trim()}`,
          },
        },
        raw: true,
      });
    } else if (req.params.name.match(/\w+%\w+(%\w+)*/g)) {
      steamData = await Steam.findAll({
        limit: 50,
        where: {
          name: {
            [Op.contains]: `%${req.params.name}%`,
          },
        },
        raw: true,
      });
    } else {
      const nameArr = req.params.name.split(" ");
      const name = nameArr.join("%");

      steamData = await Steam.findAll({
        limit: 50,
        where: {
          name: {
            [Op.like]: `${name}%`,
          },
        },
        raw: true,
      });
      let i = 0;
      // console.log(steamData);
      const cleanedData = await purifier.discriminateGames(steamData);
      // console.log(cleanedData);
      res.status(200).render("search", { game: cleanedData });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
