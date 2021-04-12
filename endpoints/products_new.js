var testData = require('../data/data');
const request = require('supertest');
var expect = require('chai').expect;

const getProductsNew = async () => {

  const resproductnew = await request(testData.apiLinks.baseURL)
          .get(testData.endpoint.newProducts)
          .expect(200);
  
  return resproductnew;

};

const expectNewProducts = async (resproductnew) => {

  expect(resproductnew).to.not.be.empty;

};

module.exports = {
  getProductsNew,
  expectNewProducts,


};
