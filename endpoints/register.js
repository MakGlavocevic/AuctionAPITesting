const request = require('supertest');
var expect = require('chai').expect;
var testData = require('../data/data');

//POST method to create a account using random generated email
registerAccount = async (email) => {
    
    const regdata = {
        "email": email,
        "firstName": "John",
        "lastName": "Doe",
        "password": "!Qwerty123"
    };

    const registerres = await request(testData.apiLinks.baseURL)
        .post(testData.endpoint.register)
        .send(regdata)
        .expect(200);

return registerres.body.person;

};

//POST method to create a account using invalid data in order to expect server status 400 
registerInvalidAccount = async () => {

    const reginvaliddata = {
        "email": 'thisemailisnotvalid',
        "firstName": "John",
        "lastName": "Doe",
        "password": "12345"
    };

    const registerinvalidres = await request(testData.apiLinks.baseURL)
        .post(testData.endpoint.register)
        .send(reginvaliddata)
        .expect(400);

return registerinvalidres.body;

};

//Using chai BDD assertions we want to expect that our account creation was successfull 
expectAccount = async (newAccount, var1, var2, var3) => {

    expect(newAccount.firstName).to.be.eq(var1);
    expect(newAccount.lastName).to.be.eq(var2);
    expect(newAccount.email).to.be.eq(var3);
    expect(newAccount.active).to.be.eq(true);

}

module.exports = {
    registerAccount,
    expectAccount,
    registerInvalidAccount
    

};