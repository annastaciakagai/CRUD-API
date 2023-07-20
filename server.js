const express = require('express')
const app = express()
const mongoose = require('mongoose')
const Student = require('./models/studentModel')
//middleware so that our api accepts json format
app.use(express.json())
app.use

SERVER_PORT =8081;
 
app.listen(SERVER_PORT, 
    () =>console.log('Listening at port:' + SERVER_PORT)
);

mongoose.connect('mongodb+srv://kagai:test456@creatingnodeapi.bwsteul.mongodb.net/NodeApi?retryWrites=true&w=majority')
.then(
    ()=>{console.log('connected to MongoDB')
    
}).catch(
    (error)=>{console.log(error)}) //to catch an error

//routes and endpoints
app.post('/student', async(req,res) =>{
   try {
    const student = await Student.create(req.body)   //save data to db
    res.json(student)
   } catch (error) {
    res.status(400).json({message: error.message})
   }
})
//fetch all data
app.get('/students', async(req, res)=>{
    try {
        const data = await Student.find()
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

//get by id
app.get('/student/:id', async(req, res)=>{
    try {
        const data = await Student.findById(req.params.id)
        res.json(data)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})
//update
app.patch('/update/:id', async(req, res)=>{
    try {
        const data = await Student.findByIdAndUpdate(req.params.id, req.body, {new: true})
        //const updateddata = await Student.findById(req.params.id)
        //res.json(updateddata)
        res.json(data)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})
//to delete
app.delete('/delete/:id', async(req, res)=>{
    try {
        const data = await Student.findByIdAndDelete(req.params.id)
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})