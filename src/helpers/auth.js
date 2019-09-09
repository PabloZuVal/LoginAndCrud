const helpers = {};

helpers.autentificacion = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    } 
    req.flash('error_msg', 'Not Authenticated');
    res.redirect('/users/signin');
};

module.exports = helpers;