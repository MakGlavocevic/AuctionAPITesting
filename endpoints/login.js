var testData = require('../data/data');
const request = require('supertest');
var expect = require('chai').expect;

//POST method to auth/login to login using valid credential and get authentication token 
getToken = async () => {

    const restoken = await request(testData.apiLinks.baseURL)
            .post(testData.endpoint.login)
            .send(testData.accountInfo)
            .expect(200);
    
    return restoken.body.token;

};

//POST method to auth/login to login using valid credential and get response body
getValidLogin = async () => {

    const reslogin = await request(testData.apiLinks.baseURL)
            .post(testData.endpoint.login)
            .send(testData.accountInfo)
            .expect(200);

    return reslogin.body.person;

};

//POST method to auth/login to login using invalid credential in order to expect server status 400 
getInvalidLogin = async () => {

    const resinvalidlogin = await request(testData.apiLinks.baseURL)
            .post(testData.endpoint.login)
            .send(testData.invalidAccountInfo)
            .expect(401);

    return resinvalidlogin;

};

//Using chai BDD assertions we want to expect that our login was successfull 
expectValidLogin = async (accountLogin, accountid, firstName, lastName) => {

    expect(accountLogin.id).to.be.eq(accountid);
    expect(accountLogin.firstName).to.be.eq(firstName);
    expect(accountLogin.lastName).to.be.eq(lastName);
    expect(accountLogin.active).to.be.eq(true);

};

module.exports = {
    getToken,
    getValidLogin,
    expectValidLogin,
    getInvalidLogin

};