randomProductID = require('./products_random');
var testData = require('../data/data');
const request = require('supertest');

//GET method to get the highest bid or incase that there are no bid available the starting price 
const getBid = async (productid) => {

    const bidres = await request(testData.apiLinks.baseURL)
        .get(`bids/product?id=${productid}`);

    if (bidres.body != null && bidres.body != '') {
      
        return bidres.body[0].amount;

      } else {

        return await getStartPrice(productid)
    
      }
};

//GET method to get the starting price 
const getStartPrice = async (productid) => {

        const startbid = await request(testData.apiLinks.baseURL)
            .get(`products?productId=${productid}&userId=0`);

        return startbid.body.startPrice;

};

module.exports = {
    getBid,
    getStartPrice
    
    };