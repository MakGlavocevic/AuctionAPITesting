randomProductID = require('../endpoints/random_product');
var testData = require('../data/data');
const request = require('supertest');
var expect = require('chai').expect;

//GET method to get the highest bid or incase that there are no bid available the starting price 
getBid = async (productid) => {

    const bidres = await request(testData.apiLinks.baseURL)
        .get(`bids/product?id=${productid}`);

    if (bidres.body != null && bidres.body != '') {
      
        return bidres.body[0].amount;

      } else {
        const startbid = await request(testData.apiLinks.baseURL)
            .get(`products?product_id=${productid}&user_id=0`);

        return startbid.body.startPrice;
      }
};

module.exports = {
    getBid
    
    }

