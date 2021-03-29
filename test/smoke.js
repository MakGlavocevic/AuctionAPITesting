var testData = require('../data/data');
const request = require('supertest');
var expect = require('chai').expect;
var randomProductID = require('../endpoints/random_product');
var token = require('../endpoints/login');
var productPrice = require('../endpoints/get_bid_price');


describe('smoke test suit', () => {
    let productid, validToken, bid;

    before(async () => {
    productid = await randomProductID();
    validToken = await token();
    bid = await productPrice(productid);
    console.log(productid);
    console.log(validToken);
    console.log(bid);
    });

    it('smoke test case 001', async () => {

        const bidRequest = {
            "price": bid + 1 ,
            "productId": productid
        };
    
        console.log(bidRequest);

        const addbidres = await request(testData.apiLinks.apiLink)
        .post(testData.endpoint.addBids)
        .set('Authorization', `Bearer ${validToken}`)
        .send(bidRequest)
        .expect(200);


console.log(addbidres.body);
        
   

        });
});



    
