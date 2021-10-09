var testData = require('../data/data');
const request = require('supertest');

//GET method to see all products in the users wishlist
const getWishlist = async (validToken) => {

    const reswishlist = await request(testData.apiLinks.baseURL)
            .get(testData.endpoint.getWishlist)
            .set('Authorization', `Bearer ${validToken}`)
            .expect(200);
    
    return reswishlist;

}

module.exports = {
    getWishlist
    
    };