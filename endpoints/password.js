var testData = require('../data/data');
const request = require('supertest');
var expect = require('chai').expect;

//POST method to auth/forgot_password to send out email and get response body
const forgotPassword = async () => {

    const respassword = await request(testData.apiLinks.baseURL)
            .post(testData.endpoint.forgotPassword)
            .send(testData.emails.email)
            .expect(200);
    
    return respassword.text;

};

//POST method to auth/forgot_password to send out invalid email and expect server status 400
const invalidForgotPassword = async () => {

    const resinvalidpassword = await request(testData.apiLinks.baseURL)
            .post(testData.endpoint.forgotPassword)
            .send(testData.emails.invalidEmail)
            .expect(400);

};

//Using chai BDD assertions we want to expect that our forgot password action was successfull 
const expectForgotPassword = async (forgotPasswordBody) => {
    
    if (forgotPasswordBody = testData.applicationMessages.weHaveSentEmail) {
      
        expect(forgotPasswordBody).to.eq(testData.applicationMessages.weHaveSentEmail);

      } else {

        expect(forgotPasswordBody).to.eq(testData.applicationMessages.weAlreadySentEmail);

      }


};

module.exports = {
    forgotPassword,
    invalidForgotPassword,
    expectForgotPassword

};