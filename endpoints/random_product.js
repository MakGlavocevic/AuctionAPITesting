 var testData = require('../data/data');
 const request = require('supertest');

 getRandomProductID = async () => {

     const productres = await request(testData.apiLinks.apiLink)
         .get(testData.endpoint.randomProduct);
    
    return productres.body[0].id;

 };


 

 module.exports = {
   getRandomProductID
    
    }