const express = require('express');
//const mongoose = require('mongoose');
const app = express();
const port= process.env.PORT || 3001;

app.get('/', (req, res) => {
    res.send(`Hello  world from the server`);
});



app.get('/contact', (req, res) => {
    res.send(`Hello Contact world from the server`);
});

app.get('/signin', (req, res) => {
    res.send(`Hello Login world from the server`);
});

app.get('/signup', (req, res) => {
    res.send(`Hello Registration world from the server`);
});

app.listen(port, () => {
    console.log(`server is runnig at port no ${port}`);
});
