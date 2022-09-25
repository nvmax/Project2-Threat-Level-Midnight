const router = require('express').Router();
const withAuth = require('../utils/auth');
const axios = require('axios');

router.get('/search', withAuth, async (req, res) => {
   // https://intense-inlet-78981.herokuapp.com/
  const games = 'https://steamspy.com/api.php?request=top100in2weeks';
 
  axios.get(games)
  .then(async function (response) {
    const gameArray = Object.entries(response.data);
    const gameList = gameArray.map(([id,obj])=> obj);
    const sortedGames = gameList.sort((a, b) => b.ccu - a.ccu);
    const toptwenty = sortedGames.slice(0, 20);
    res.render('search', { top20: toptwenty });
  })
  .catch(function (error) {
    console.log(error);
  });
});








router.get('/login', (req, res) => {
  res.render('login');
});

router.get('/register', (req, res) => {
  res.render('register');
});

router.get('/index', (req, res) => {
  res.render('index');
});

module.exports = router;
