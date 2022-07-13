"use strict"

const express = require('express')
    , mongoose = require('mongoose')
    , route = require('./routes')
    , cors = require('cors')

const app = express()
    , port = 3000;
 
// connect ke database mongoDB
mongoose.connect("mongodb+srv://ary:root@dataku.m6nnf.mongodb.net/?retryWrites=true&w=majority",{ 
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', (error)=> console.error(error));
db.once('open', () => console.log('Database Connected'));
 
// middleware 
app.use(cors());
app.use(express.json());
app.use('/api',route);
 
app.listen(port,() => console.log(`Server Running at port: ${port}`));