 const {vonage} = require('./config.js');

async function sendSMS(data) {  
const from = "sms service";
const to = /*"+4524630028"*/ `+45${data.number}`;
const text = data.text;
   vonage.sms.send({from, to, text}, (err, responseData) => {
     if (err) {
        console.log(err);
    } else {
        if(responseData.messages[0]['status'] === "0") {
            console.log("Message sent successfully.");
        } else {
            console.log(`Message failed with error: ${responseData.messages[0]['error-text']}`);
        }
    }
});
}

module.exports = {sendSMS}; 