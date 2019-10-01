// https://youtu.be/-bI0diefasA?t=2240
const mongoose = require('mongoose');
//mongoose.connect('')

mongoose.connect('mongodb+srv://UnboundValpo:Valpo2019@cluster0-ubopd.mongodb.net/test?retryWrites=true&w=majority', { 
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})
.then(db => console.log('DB connected'))
.catch(err => console.log(err))

