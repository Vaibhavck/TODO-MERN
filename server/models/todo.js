const mongoose = require('mongoose');
const mongodb = require('mongodb');
const buffer = require('buffer');

var todoSchema = new mongoose.Schema({
    title : {
        type: String,
        required: true
    },
    body: {
        type: String,
    },
    status: {
        type: String,
        required: true
    }
}, { collection: 'todos', timestamps: true })


mongoose.model("todos", todoSchema);