const loggedIn = (req, res, next) => {
  if (req.session.logged_in) {
    res.render('logged');
  }
};

module.exports = loggedIn;
