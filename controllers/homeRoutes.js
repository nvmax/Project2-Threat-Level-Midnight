const router = require('express').Router();
const withAuth = require('../utils/auth');
const axios = require('axios');
const { Steam } = require('../models');
const sequelize = require('../config/connection');
const {Op} = require('sequelize');

router.get('/search', withAuth, async (req, res) => {
   // https://intense-inlet-78981.herokuapp.com/
  const games = 'https://api.steampowered.com/ISteamChartsService/GetGamesByConcurrentPlayers/v1/?';
 
  axios.get(games)
  .then(async function (response) {
    const gameArray = response.data.response.ranks.map(game => game.appid).slice(0, 20);
    console.log(gameArray);
    const toptwenty = await Steam.findAll({
      where: {
        appid: {[Op.or]: gameArray}
      },
      raw: true
      })
    res.render('search', { top20: toptwenty, logged_in: req.session.logged_in });
  })
  .catch(function (error) {
    console.log(error);
  });
});


router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/search');
    return;
  }
  res.render('login');
});

router.get('/register', (req, res) => {
  res.render('register');
});

router.get('/index', (req, res) => {
  res.render('index', { logged_in: req.session.logged_in });
});

module.exports = router;
// const router = require("express").Router();
// const withAuth = require("../utils/auth");
// const axios = require("axios");
// const { Steam } = require("../models");
// const sequelize = require("../config/connection");
// const { Op } = require("sequelize");

// router.get("/search", withAuth, async (req, res) => {
//   const gameArray = [];
//   const goodGames = [];
//   try {
//     // https://intense-inlet-78981.herokuapp.com/
//     const games =
//       "https://api.steampowered.com/ISteamChartsService/GetGamesByConcurrentPlayers/v1/?";

//     const response = await axios.get(games);
//     gameArray.push(...response.data.response.ranks.map((game) => game.appid));
//     // console.log(gameArray);
//   } catch (error) {
//     console.log(error);
//   }
//   while (goodGames.length < 5) {
//     let id = gameArray.pop();
//     try {
//       const data = (
//         await axios.get(
//           `https://store.steampowered.com/api/appdetails?appids=${id}`
//         )
//       ).data;
//       if (data) {
//         if (data[Object.keys(data)[0]].data) {
//           if (data[Object.keys(data)[0]].data.type === "game") {
//             goodGames.push(id);
//           }
//         }
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   }
//   const toptwenty = await Steam.findAll({
//     where: {
//       appid: { [Op.or]: goodGames },
//     },
//     raw: true,
//   });
//   res.render("search", {
//     top20: toptwenty,
//     logged_in: req.session.logged_in,
//   });
// });

// router.get("/login", (req, res) => {
//   if (req.session.loggedIn) {
//     res.redirect("/search");
//     return;
//   }
//   res.render("login");
// });

// router.get("/register", (req, res) => {
//   res.render("register");
// });

// router.get("/index", (req, res) => {
//   res.render("index", { logged_in: req.session.logged_in });
// });

// module.exports = router;
