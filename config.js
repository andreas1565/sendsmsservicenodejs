const  {Vonage} = require ('@vonage/server-sdk');
const dotenv = require('dotenv');
dotenv.config();

const vonage = new Vonage({
    apiKey: process.env.API_KEY,
    apiSecret:process.env.SECRET
});

module.exports = {vonage};