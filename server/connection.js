const mongoose = require('mongoose');
require('dotenv').config();
require('./models/todo');

const mongoURI = process.env.MONGO_URI;

mongoose.connect(mongoURI.toString(), { useFindAndModify: false, useNewUrlParser: true, useUnifiedTopology: true }, (error)=>{
    if(error){
        console.log('connection error : ', error);
    }else{
        console.log("connected to database");
    }
});

mongoose.connection.once('open', ()=>{
    console.log("connected to database");
}).on('error', function(error){
    console.log('connection error : ', error);
})