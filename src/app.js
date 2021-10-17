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

//create a new student using async await
app.post('/students', async(req, res) => {
    try{
    const user = new Student(req.body);
     const createpromise= await user.save(); 
        res.status(201).send(createpromise);

    }catch(e){ res.status(400).send(e);}
})

app.listen(port, () => {
    console.log(`server is runnig at port no ${port}`);
});
