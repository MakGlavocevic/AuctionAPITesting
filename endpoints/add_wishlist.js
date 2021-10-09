var testData = require('../data/data');
const request = require('supertest');

//POST method to add product to the wishlist 
const addWishlist = async (validToken, productID) => {

    const resaddwishlist = await request(testData.apiLinks.baseURL)
            .post(testData.endpoint.addWishlist)
            .set('Authorization', `Bearer ${validToken}`)
            .send({"productId": productID})
            .expect(200);
    
    return resaddwishlist;

}

module.exports = {
    addWishlist
    
    };