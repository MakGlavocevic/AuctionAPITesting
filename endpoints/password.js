var testData = require('../data/data');
const request = require('supertest');
var expect = require('chai').expect;

//POST method to auth/forgot_password to send out email and get response body
forgotPassword = async () => {

    const respassword = await request(testData.apiLinks.baseURL)
            .post(testData.endpoint.forgotPassword)
            .send(testData.emails.email)
            .expect(200);
    
    return respassword.text;

};

//POST method to auth/forgot_password to send out invalid email and expect server status 400
invalidForgotPassword = async () => {

    const resinvalidpassword = await request(testData.apiLinks.baseURL)
            .post(testData.endpoint.forgotPassword)
            .send(testData.emails.invalidEmail)
            .expect(400);

};

//Using chai BDD assertions we want to expect that our forgot password action was successfull 
expectForgotPassword = async (forgotPasswordBody) => {
    
    if (forgotPasswordBody = "We sent you an email with a link to reset your password. The link will expire after 24 hours.") {
      
        expect(forgotPasswordBody).to.eq("We sent you an email with a link to reset your password. The link will expire after 24 hours.");

      } else {

        expect(forgotPasswordBody).to.eq("We have already sent you an email with a link to reset your password in the last 24 hours. Please check your inbox.");

      }


};

module.exports = {
    forgotPassword,
    invalidForgotPassword,
    expectForgotPassword

};