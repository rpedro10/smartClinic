const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
var mongoose = require('mongoose');
const port = process.env.PORT ||5000;



//middleware
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));

const mongoURI = 'mongodb://bright:brightdigital1@ds145412.mlab.com:45412/smartclinic';

var db = mongoose.connect(mongoURI, {useNewUrlParser : true})
    .then(()=> console.log('MongoDB Connected'))
    .catch(err => console.log(err))


let index = require('./routes/index');


app.listen(port,()=> console.log('server started at port: ')+port);
app.use('/api', index);



module.exports = app;
