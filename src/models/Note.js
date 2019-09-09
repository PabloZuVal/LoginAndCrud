//El nombre del modelo es Note con mayuscula ya que es el modelo de datos (Buenas practicas)
const mongoose = require('mongoose');
const { Schema } = mongoose;

const NoteSchema = new Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    date: {type: Date, default: Date.now},
    user: {type: String} // este user va a almacenar el id de usuario
});

module.exports = mongoose.model('Note', NoteSchema)