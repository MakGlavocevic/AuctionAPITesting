var testData = require('../data/data');
const request = require('supertest');

//DELETE method to delete all bids that user made towards a single product
const deleteUserBid = async (validToken, productID) => {

    const resdeletebids = await request(testData.apiLinks.baseURL)
            .delete(testData.endpoint.removeBids)
            .set('Authorization', `Bearer ${validToken}`)
            .send({"productId": productID})
            .expect(200);

            return resdeletebids
    
}

module.exports = {
    deleteUserBid
    
    };