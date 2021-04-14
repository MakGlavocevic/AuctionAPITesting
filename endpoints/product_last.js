var testData = require('../data/data');
const request = require('supertest');
var expect = require('chai').expect;

//GET method to products/last so that we can expect 200 and see what are the items with the closest deadline
const getProductsLast = async () => {

    const resproductlast = await request(testData.apiLinks.baseURL)
            .get(testData.endpoint.lastProducts)
            .expect(200);
    
    return resproductlast;
  
  };
  
  //Using chai BDD assertions we want to expect that our last products endpoint doesn't return an empty body 
  const expectLastProducts = async (resproductlast) => {
  
    expect(resproductlast).to.not.be.empty;
  
  };
  
  module.exports = {
    getProductsLast,
    expectLastProducts,
  
  };