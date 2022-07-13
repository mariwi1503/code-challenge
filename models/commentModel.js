"use strict"

// import mongoose 
const mongoose = require('mongoose')
// Buat Schema
const Comment = mongoose.Schema({
    comment:{
        type: String,
        required: true
    },
    article_id:{
        type: String,
        required: true 
    }
});
 
// export model
module.exports = mongoose.model('Comment', Comment);