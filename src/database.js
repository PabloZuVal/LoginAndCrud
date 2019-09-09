// https://youtu.be/-bI0diefasA?t=2240
const mongoose = require('mongoose');
//mongoose.connect('')

mongoose.connect('mongodb://127.0.0.1:27017/login-crud', { 
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false 
})
.then(db => console.log('DB connected'))
.catch(err => console.log(err))

