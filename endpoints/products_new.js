var testData = require('../data/data');
const request = require('supertest');

//GET method to products/new to choose latest product to bid on 
getNewProductID = async () => {

    const newproductres = await request(testData.apiLinks.baseURL)
        .get(testData.endpoint.newProducts)
        .expect(200);
   
   return newproductres.body[0].id;

};

module.exports = {
  getNewProductID
   
   };