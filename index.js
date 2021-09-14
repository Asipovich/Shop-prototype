const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const passport = require('passport');
const path = require('path');

//AFTER INSTALATION MONGODB
//const mongoose = require('mongoose');
//add in package.json "mongoose": "*"

const app = express();

const port = 3000;

app.get('/', (req, res)=>{res.send('Strona głowna!!')});

app.listen(port, ()=>{
    console.log("Server has been launch on port: " + port)
});
