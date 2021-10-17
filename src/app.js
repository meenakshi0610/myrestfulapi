const express = require('express');
require('./db/conn');
const Student = require("./models/students");
//const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 3001;
app.use(express.json());

//create a new student
//app.post('/students', (req, res) => {
//console.log(req.body);
// const user = new Student(req.body);
//user.save().then(() => {
// res.status(201).send(user);
//}).catch((e) => {
// res.status(400).send(e);
// })
//})

//create a new student in using async await
app.post('/students', async (req, res) => {
    try {
        const user = new Student(req.body);
        const createpromise = await user.save(); //save in database
        res.status(201).send(createpromise);

    } catch (e) { res.status(400).send(e); }
})

//read the data from student api
app.get('/students', async (req, res) => {
    try {
        const getstudentsdata = await Student.find(); //get from database 
        res.send(getstudentsdata);
    } catch (e) { res.send(e); }
})

//get the individual data by id
app.get('/students/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        // const getstudentdata = await Student.findById({_id:_id});
        const getstudentdata = await Student.findById(_id); //get individual from database 
        if (!getstudentdata) {
            return res.status(404).send();
        } else {
            res.send(getstudentdata);
        }
    } catch (e) { res.send(e); }
})
//update the students by it id
app.patch('/students/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const updatedata = await Student.findByIdAndUpdate(_id, req.body, {
            new: true
        });
        res.send(updatedata);
    } catch (e) { res.send(e); }
})

//delete the students by it id
app.delete('/students/:id', async (req, res) => {
    try {
        const deletedata = await Student.findByIdAndDelete(req.params.id);
        if (!req.params.id) {
            return res.status(404).send();
        }
        res.send(deletedata);
    } catch (e) { res.status(500).send(e); }
})

app.listen(port, () => {
    console.log(`server is runnig at port no ${port}`);
});
