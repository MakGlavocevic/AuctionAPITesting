require('dotenv').config();
var chance = require('chance').Chance();

const testData = {

apiLinks:{  
apiLink:'https://auction-abh-server.herokuapp.com/'
},

accountInfo:{
    "email": process.env.TEST_USERNAME,
  "password": process.env.TEST_PASSWORD
},

accountCreat:{
    "email": chance.email({domain: 'gmail.com'}),
    "firstName": "John",
    "lastName": "Doe",
    "password": "!Qwerty123"
},

endpoint:{
login: 'auth/login',
register:'auth/register',
category:'categories',
randomProduct:'products/featured/random',
bids: 'bids',
addBids:'bids/add'
}

}

module.exports = testData