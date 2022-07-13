// import mongoose 
const mongoose = require('mongoose')
 
// Buat Schema
const Atricle = mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    content:{
        type: String,
        required: true 
    },
    type:{
        type: String,
        required: true
    }
});
 
// export model
module.exports = mongoose.model('Article', Atricle)