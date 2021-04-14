var testData = require('../data/data');
const request = require('supertest');
var expect = require('chai').expect;

//GET method to products/new so that we can expect 200 and see what are the new items
const getProductsNew = async () => {

  const resproductnew = await request(testData.apiLinks.baseURL)
          .get(testData.endpoint.newProducts)
          .expect(200);
  
  return resproductnew;

};

//Using chai BDD assertions we want to expect that our new products endpoint doesn't return an empty body 
const expectNewProducts = async (resproductnew) => {

  expect(resproductnew).to.not.be.empty;

};

module.exports = {
  getProductsNew,
  expectNewProducts,


};
