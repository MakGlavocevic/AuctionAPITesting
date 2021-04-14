require('dotenv').config();
var chance = require('chance').Chance();

const testData = {

apiLinks:{  
  baseURL:'https://auction-abh-server.herokuapp.com/'
},

emails:{
  randomEmail: chance.email({domain: 'gmail.com'}),
  email: {"email": process.env.TEST_USERNAME},
  invalidEmail: {"email": "invalidemailformat"}
},

applicationMessages:{
  weHaveSentEmail:"We sent you an email with a link to reset your password. The link will expire after 24 hours.",
  weAlreadySentEmail:"We have already sent you an email with a link to reset your password in the last 24 hours. Please check your inbox."
},

searchTerms:{
invalidSearchTerm: 'thisitemdoesnotexist'
},

accountInfo:{
    "email": process.env.TEST_USERNAME,
    "password": process.env.TEST_PASSWORD
},

invalidAccountInfo:{
  "email": "thisemailisnotregistered@gmail.com",
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
  addBids:'bids/add',
  newProducts:'products/new',
  lastProducts:'products/last',
  forgotPassword:'auth/forgot_password',
  subcategories:'subcategories'
}
};

module.exports = testData;