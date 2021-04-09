 var testData = require('../data/data');
 const request = require('supertest');

 //GET method to products/featured/random to choose which product to bid on 
 getRandomProductID = async () => {

     const productres = await request(testData.apiLinks.baseURL)
         .get(testData.endpoint.randomProduct)
         .expect(200);
    
    return productres.body[0].id;

 };

 module.exports = {
   getRandomProductID
    
    };