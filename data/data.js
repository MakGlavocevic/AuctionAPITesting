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

password:{
  "password": process.env.TEST_PASSWORD
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

updateProfile:{
    "birthDate": "2021-04-26T07:09:08.782Z",
    "card": {
      "cardNumber": "string",
      "cvc": 0,
      "expirationMonth": 0,
      "expirationYear": 0,
      "name": "string"
    },
    "city": "string",
    "country": "string",
    "email": "string",
    "firstName": "string",
    "gender": "FEMALE",
    "imageUrl": "string",
    "lastName": "string",
    "phoneNumber": "string",
    "state": "string",
    "street": "string",
    "verified": true,
    "zip": "string"
},

endpoint:{
  login: 'auth/login',
  register:'auth/register',
  category:'categories',
  randomProduct:'products/featured/random',
  bids: 'bids',
  categories: 'categories',
  addBids:'bids/add',
  removeBids:'bids/remove',
  newProducts:'products/new',
  lastProducts:'products/last',
  forgotPassword:'auth/forgot_password',
  subcategories:'subcategories',
  getWishlist:'products/user/wishlist',
  addWishlist:'wishlist/add',
  removeWishlist:'wishlist/remove',
  deactivateAccoount:'auth/deactivate',
}
};

module.exports = testData;