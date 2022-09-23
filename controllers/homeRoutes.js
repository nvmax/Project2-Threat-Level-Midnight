const router = require('express').Router();

router.get('/search', (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect('/index');
    return;
  }
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
