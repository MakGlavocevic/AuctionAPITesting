randomProductID = require('../endpoints/random_product');
var testData = require('../data/data');
const request = require('supertest');


var productPrice = async (productid) => {

    const bidres = await request(testData.apiLinks.apiLink)
    .get(`bids/product?id=${productid}`);
    
    return bidres.body[0].amount

};

module.exports = productPrice;
