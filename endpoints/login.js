var testData = require('../data/data');
const request = require('supertest');

getToken = async () => {

    const res = await request(testData.apiLinks.apiLink)
            .post(testData.endpoint.login)
            .send(testData.accountInfo)
    
    return res.body.token;

};



module.exports = {
    getToken

}