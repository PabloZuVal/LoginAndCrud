<<<<<<< HEAD
const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
    res.render('index');
});

router.get('/about', (req, res) => {
    res.render('about');
});

=======
const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
    res.render('index');
});

router.get('/about', (req, res) => {
    res.render('about');
});

>>>>>>> a069c98f061d9d34e361bcc13a2b4c6a7b359b72
module.exports= router;