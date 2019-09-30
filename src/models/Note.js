<<<<<<< HEAD
//El nombre del modelo es Note con mayuscula ya que es el modelo de datos (Buenas practicas)
const mongoose = require('mongoose');
const { Schema } = mongoose;

const NoteSchema = new Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    date: {type: Date, default: Date.now},
    user: {type: String} // este user va a almacenar el id de usuario
});

=======
//El nombre del modelo es Note con mayuscula ya que es el modelo de datos (Buenas practicas)
const mongoose = require('mongoose');
const { Schema } = mongoose;

const NoteSchema = new Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    date: {type: Date, default: Date.now},
    user: {type: String} // este user va a almacenar el id de usuario
});

>>>>>>> a069c98f061d9d34e361bcc13a2b4c6a7b359b72
module.exports = mongoose.model('Note', NoteSchema)