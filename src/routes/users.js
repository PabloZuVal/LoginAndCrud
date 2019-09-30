const express = require('express');
const router = express.Router();

const User = require('../models/Users');

const passport = require('passport');

router.get('/users/signin', (req, res) => {
    res.render('users/signin');
});

router.post('/users/signin', passport.authenticate('local',{
    successRedirect: '/notes',
    failureRedirect: '/users/signin',
    failureFlash: true
}));

router.get('/users/signup', (req, res) => {
    res.render('users/signup');
});

router.post('/users/signup', async (req, res) => {
    const {name,email,password,confirm_password} = req.body;
    const errors = [];
    if (password != confirm_password) {
        errors.push({text: 'Password do not match'});
    }
    if (name.length <= 0) {
        errors.push({ text: 'Please insert your name' });
    }
    if (password.length <= 0) {
        errors.push({text: 'Please insert your password'});
    }
    if (confirm_password.length <= 0) {
        errors.push({ text: 'Please confirm your password' });
    }
    if (password.length <= 4) {
        errors.push({text: 'Password must be at least 4 characters'});
    }
    if (errors.length > 0) {
        res.render('users/signup',{errors, name, email, password, confirm_password});
    } else {
        //que pasa si ingresa un email repetido?
        const emailUser = await User.findOne({email: email});
        if (emailUser) {
            req.flash('error_msg','The email is already in use');
            res.redirect('/users/signup'); // para que nuevamente inserte los datos
        }
        //res.send('OK');
        const newUser = new User({name, email, password});
        newUser.password = await newUser.encryptPassword(password); // error aca con el metodo EN EL MODELO METHODS SSS FALTO LA S---------------------------------------------------------
        await newUser.save();
        req.flash('success_msg', 'You are registred');
        res.redirect('/users/signin');
    }
});

router.get('/users/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});

module.exports = router;