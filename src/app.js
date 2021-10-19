const express = require('express');
require('./db/conn');
const Student = require("./models/students");
const studentrouter= require("./routers/student")

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(studentrouter); 

app.listen(port, () => {
    console.log(`server is runnig at port no ${port}`);
});
