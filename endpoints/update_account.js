var testData = require('../data/data');
const request = require('supertest');

//PUT method to update account informartions
const updateAccount = async (validToken) => {

    const resupdateacc = await request(testData.apiLinks.baseURL)
            .put(testData.endpoint.deactivateAccoount)
            .set('Authorization', `Bearer ${validToken}`)
            .send(testData.updateProfile)
            .expect(200);
    
    return resupdateacc;

}

module.exports = {
    updateAccount
    
    };