var testData = require('../data/data');
const request = require('supertest');
var expect = require('chai').expect;

//POST method to bids/add to send the bid to the product with an authentication token 
bidPost = async (validToken, bidRequest) => {

    const addbidres = await request(testData.apiLinks.baseURL)
        .post(testData.endpoint.addBids)
        .set('Authorization', `Bearer ${validToken}`)
        .send(bidRequest)
        .expect(200);

return addbidres.body;

};

//Using chai BDD assertions we want to expect that our bid was successfull 
expectBid = async (postBidBody, productid, bid) => {

    expect(postBidBody.productId).to.eq(productid);
    expect(postBidBody.amount).to.eq(bid);
    
};

//Our POST body
function postBody (bid, productid) {

    const bidRequest = {
        "amount": bid + 1 ,
        "productId": productid
    };

    return bidRequest
};

module.exports = {
    bidPost,
    expectBid,
    postBody
     
    };