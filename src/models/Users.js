<<<<<<< HEAD
const mongoose = require('mongoose');   
const { Schema } = mongoose;
const bcrypt = require('bcryptjs'); 

const UserSchema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    date: {type: Date, default: Date.now}
});
//--------------------------------------    ES METHODSSSSSS CON S -------------------------------------------

//cifrado de contraseña
UserSchema.methods.encryptPassword = async (password) => { //pide la contraseña
    const salt = await bcrypt.genSalt(10);
    const hash = bcrypt.hash(password, salt);
    return hash; //retorna la contraseña cifrada
};

UserSchema.methods.matchPassword = async function (password) { // este metodo se ocupa cuando estemos logiando al usuario
    return await bcrypt.compare(password, this.password); //compara la contraseña que esta dando con la de la base de datos 
};

=======
const mongoose = require('mongoose');   
const { Schema } = mongoose;
const bcrypt = require('bcryptjs'); 

const UserSchema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    date: {type: Date, default: Date.now}
});
//--------------------------------------    ES METHODSSSSSS CON S -------------------------------------------

//cifrado de contraseña
UserSchema.methods.encryptPassword = async (password) => { //pide la contraseña
    const salt = await bcrypt.genSalt(10);
    const hash = bcrypt.hash(password, salt);
    return hash; //retorna la contraseña cifrada
};

UserSchema.methods.matchPassword = async function (password) { // este metodo se ocupa cuando estemos logiando al usuario
    return await bcrypt.compare(password, this.password); //compara la contraseña que esta dando con la de la base de datos 
};

>>>>>>> a069c98f061d9d34e361bcc13a2b4c6a7b359b72
module.exports = mongoose.model('User',UserSchema);