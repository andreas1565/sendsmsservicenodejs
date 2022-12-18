const express = require('express');
const {sendSMS} = require('./sendsms');
const dotenv = require('dotenv');
const formidableMiddleware = require('express-formidable');

dotenv.config();
const app = express();
app.use(formidableMiddleware());


app.use(express.json())

app.post('/', (req, res) =>{
    sendSMS(req.fields);
   res.status(200).end();
});

app.listen('4000', () =>{console.log('server is runing')});