var testData = require('../data/data');
const request = require('supertest');

bidPost = async (validToken, bidRequest) => {

    const addbidres = await request(testData.apiLinks.apiLink)
        .post(testData.endpoint.addBids)
        .set('Authorization', `Bearer ${validToken}`)
        .send(bidRequest)
        .expect(200);

return addbidres.body

};


module.exports = {
    bidPost,
     
    }