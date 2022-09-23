const router = require('express').Router();
const withAuth = require('../utils/auth');

router.get('/search', withAuth, (req, res) => {
  res.render('search');
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
