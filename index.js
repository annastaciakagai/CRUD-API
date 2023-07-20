const express = require('express')
const app = express()
const mongoose = require('mongoose')
require('dotenv').config()
const mongostring = process.env.DATABASE_URL //store string to a variable 
mongoose.connect(mongostring);
const database = mongoose.connection;
database.on('error',(error) =>{
    console.log(error)
})
database.once('connected', ()=>{
    console.log('Database connected')
})

const routes = require('./routes/routes');
app.use(express.json())

app.listen(8082, 
    () =>console.log('Listening at port 8082')
);
app.use('/', routes) //base endpoint , and content of the routes


