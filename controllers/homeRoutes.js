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
    res.render('search', { top20: toptwenty });
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
  res.render('index');
});

module.exports = router;
