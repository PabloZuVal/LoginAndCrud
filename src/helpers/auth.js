<<<<<<< HEAD
const helpers = {};

helpers.autentificacion = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    } 
    req.flash('error_msg', 'Not Authenticated');
    res.redirect('/users/signin');
};

=======
const helpers = {};

helpers.autentificacion = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    } 
    req.flash('error_msg', 'Not Authenticated');
    res.redirect('/users/signin');
};

>>>>>>> a069c98f061d9d34e361bcc13a2b4c6a7b359b72
module.exports = helpers;