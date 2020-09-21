const User = require('../models/user');

exports.getLogin = (req, res, next) => {
  res.render('auth/login', {
    path: '/login',
    pageTitle: 'Login',
    isAuthenticated: false
  });
};

exports.postLogin = (req, res, next) => {
   
    User.findById('5f65f18f05b3cc46045655dd')
    .then(userData => {
      req.session.isLoggedIn = true;
      req.session.user = userData;
      console.log(req.session.user + 'userData');
    })
    .catch(err => console.log(err));
    res.redirect('/');
  };
