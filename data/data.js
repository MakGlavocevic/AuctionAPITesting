require('dotenv').config();
var chance = require('chance').Chance();

const testData = {

apiLinks:{  
  baseURL:'https://auction-abh-server.herokuapp.com/'
},

email:{
  randomEmail: chance.email({domain: 'gmail.com'})
},


accountInfo:{
    "email": process.env.TEST_USERNAME,
    "password": process.env.TEST_PASSWORD
},

invalidAccountInfo:{
  "email": process.env.TEST_USERNAME,
  "password": "incorrectpassword"
},

accountCreat:{
  "email": chance.email({domain: 'gmail.com'}),
  "firstName": "John",
  "lastName": "Doe",
  "password": process.env.TEST_PASSWORD
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