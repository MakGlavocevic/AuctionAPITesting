var testData = require('../data/data');
const request = require('supertest');
var expect = require('chai').expect;

//POST method to bids/add to send the bid to the product with an authentication token 
const bidPost = async (validToken, bidRequest) => {

    const addbidres = await request(testData.apiLinks.baseURL)
        .post(testData.endpoint.addBids)
        .set('Authorization', `Bearer ${validToken}`)
        .send(bidRequest)
        .expect(200);

return addbidres.body;

};

//POST method to bids/add to send the bid to the product without an authentication token 
const unauthorizedbidPost = async (bidRequest) => {

        await request(testData.apiLinks.baseURL)
        .post(testData.endpoint.addBids)
        .send(bidRequest)
        .expect(401);

};

//POST method to bids/add to send the invalid bid to the product with an authentication token 
const invalidBidPost = async (validToken, bidRequest) => {

        await request(testData.apiLinks.baseURL)
        .post(testData.endpoint.addBids)
        .set('Authorization', `Bearer ${validToken}`)
        .send(bidRequest)
        .expect(400);

};

//Using chai BDD assertions we want to expect that our bid was successfull 
const expectBid = async (postBidBody, productid, bid) => {

    expect(postBidBody.productId).to.eq(productid);
    expect(postBidBody.amount).to.eq(bid);
    
};

module.exports = {
    bidPost,
    expectBid,
    invalidBidPost,
    unauthorizedbidPost

    };