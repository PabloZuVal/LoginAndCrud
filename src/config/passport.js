const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const User = require('../models/Users');

passport.use(new LocalStrategy({
    usernameField: 'email'
}, async (email, password, done) => {               // callback done() sirve para terminar el proceso de autenticacion 
    const user = await User.findOne({email: email});
    if (!user) {                                    //validar si el usuario existe (a traves del correo) --> si no existe se retona el callback
        return done(null,false,{message: 'Not user found'});
    } else {                                        //si el usuario existe  validar la contraseña
        const match = await user.matchPassword(password); // ver si coinsiden las contraseñas // LA U ES MINUSCULA
        if(match) {
            return done(null,user);
        } else {
            return done(null, false, {message: 'Incorrect Password'}); //null --> retonar que no hay un error false--> no hay ningun usuario y luego un msj de vuelta
        }
    }
}));

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id,done) => {
    User.findById(id, (err,user) => {
        done(err,user);
    });
});