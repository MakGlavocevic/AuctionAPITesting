var testData = require('../data/data');
const request = require('supertest');

//POST method to remove a product from the wihslist
const removeWishlist = async (validToken, productID) => {

    const resremovewishlist = await request(testData.apiLinks.baseURL)
            .post(testData.endpoint.removeWishlist)
            .set('Authorization', `Bearer ${validToken}`)
            .send({"productId": productID})
            .expect(200);
    
    return resremovewishlist;

};

module.exports = {
    removeWishlist
    
    };