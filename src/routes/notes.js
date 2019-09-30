const express = require('express');
const router = express.Router();

const Note = require('../models/Note'); // con este note se van a poder hacer las tareas del CRUD 
const { autentificacion } = require('../helpers/auth');

router.get('/notes/add', autentificacion, (req, res) => {
    res.render('notes/new-note');
});

// Ruta para recibir datos
router.post('/notes/new-note', autentificacion, async (req, res) => {
    const { title, description } = req.body;
    const errors = [];
    if (!title) {                                                   //Validaciones  
        errors.push({ text: 'Please write a title ' });
    }
    if (!description) {
        errors.push({ text: 'Please write a description' }); //error aca era "text", no "description"
    }
    if (errors.length > 0) {
        res.render('notes/new-note', {
            errors,
            title,
            description
        });
    } else {
        //res.send('Ok'); //https://youtu.be/-bI0diefasA?t=4536  antes de poner codigo aca hay que hacer un modelo de datoss
        // Con un Schema estamos creando un tipo de clase, por lo tanto hay que instanciarla, para crear un nuevo dato
        const newNote = new Note({title, description});
        newNote.user = req.user.id;
        await newNote.save();
        req.flash('success_msg', 'Note added successfully');
        res.redirect('/notes');
    }
});

router.get('/notes', autentificacion, async (req, res) => { // Buscar datos en la bd es un proceso sincrono, por eso se ocupa async await (le decimos a node que es un proceso que va a tomar algo de tiemopo)
    //https://youtu.be/-bI0diefasA?t=5176 se puede filtrar lo que se quiere encontrar
    const notes = await Note.find({ user: req.user.id }).sort({date: 'desc'}); // se puede editar el orden en que se vean desde la ultima creada
    res.render('notes/all-notes', { notes }); //se muestra la ubicacion de la vista y se le pasa la coleccion de objetos con las notas
});

router.get('/notes/edit/:id', autentificacion, async (req,res) =>{
    const note = await Note.findById(req.params.id);
    res.render('notes/edit-note',{note});
});

router.put('/notes/edit-note/:id', autentificacion, async (req, res) =>{
    const {title, description} = req.body;
    await Note.findByIdAndUpdate(req.params.id, { title,description });
    req.flash('success_msg', 'Note Updated Succefully');
    res.redirect('/notes');
});

router.delete('/notes/delete/:id', autentificacion, async (req,res) => {
    await Note.findByIdAndDelete(req.params.id);
    req.flash('success_msg', 'Note Updated Deleted');
    res.redirect('/notes');
});

module.exports = router;