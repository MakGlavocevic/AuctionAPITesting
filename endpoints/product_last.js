var testData = require('../data/data');
const request = require('supertest');
var expect = require('chai').expect;

const getProductsLast = async () => {

    const resproductlast = await request(testData.apiLinks.baseURL)
            .get(testData.endpoint.lastProducts)
            .expect(200);
    
    return resproductlast;
  
  };
  
  const expectLastProducts = async (resproductlast) => {
  
    expect(resproductlast).to.not.be.empty;
  
  };
  
  module.exports = {
    getProductsLast,
    expectLastProducts,
  
  
  };