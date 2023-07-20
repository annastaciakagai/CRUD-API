const express = require('express');
const Model= require('../models/studentModel');
const Student = require('../models/studentModel');
const router = express.Router()
module.exports =router;
// we create routes for the following
// posting data to db
//getting data form db
//getting, modifying, deleting data based on id
// use res for sending response to our client..front-end client, insomnia,postman.
//use req to recieve requests from client.

router.post('/post', async(req, res)=>{ //async function does sth if a promise is resolved or rejected
    const student = new Model({
        name :req.body.name,   //accepts data from the user requests
        registeration :req.body.registeration,
        department:req.body.department
    })
    //use try-catch block to handle success messages and errors
    //store data using data.save()
    try {
        const SaveData =await student.save() //await is a method from promise cases. 
        res.status(200).json(SaveData) //respond with status ok and data saved in json format
    } catch (error) {
        res.status(400).json({message: error.message}) //status 400 that means its user error
        
    }
})


router.get('/students', async(req, res)=>{
    try {
        const data = await Model.find();//getting data form model
        res.json(data)
    } catch (error) {
        res.status(500).json({message: error.message}) //status 500 indicating server error
    }
})

router.get('/student/:id', async(req, res)=>{
    try{
    const data = await Model.findById(req.params.id);
    res.json(data)
    }
    catch (error) {
        res.status(500).json({message: error.message})
    }
})

router.patch('/update/:id', async(req, res)=>{
    try {

        const data =await Model.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.json(data)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
})

router.delete('/delete/:id', async(req, res)=>{
    try {
        const {id} = req.params;
        const data = await Model.findByIdAndDelete(id)
        res.send(`Document with ID ${data.name} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})
