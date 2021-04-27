var testData = require('../data/data');
const request = require('supertest');

//POST method to deactive a users account using valid token and account password
const deactivateAccount = async (validToken) => {

    const resdeactivate = await request(testData.apiLinks.baseURL)
            .post(testData.endpoint.deactivateAccoount)
            .set('Authorization', `Bearer ${validToken}`)
            .send(testData.password)
            .expect(200);
    
    return resdeactivate;

}

module.exports = {
    deactivateAccount
    
    };