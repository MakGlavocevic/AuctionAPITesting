var expect = require('chai').expect;
require('dotenv').config();
var testData = require('../data/data');
var randomProductAPI = require('../endpoints/random_product');
var loginAPI = require('../endpoints/login');
var bidPriceAPI = require('../endpoints/get_bid_price');
var postBidAPI = require('../endpoints/bid_post');
var helper = require('../endpoints/helper')
var registerAPI = require('../endpoints/register');

describe('regression test suit', () => {

   
    it('Create an account using valid information', async () => {

        //Generate a random email for test purposes
        const validEmail = testData.email.randomEmail;

        //Show randomly generated email
        helper.showMe(validEmail);

        //POST method to auth/register to send the validEmail in order to create a new user 
        let newAccount = await registerAPI.registerAccount(validEmail);

        //Using chai BDD assertions we want to expect that our bid was successfull 
        await registerAPI.expectAccount(newAccount, "John", "Doe", validEmail);

        });

    it('Create an account using invalid information', async () => {

        //POST method to auth/register to send invalid data in order to expect server status 400 
        await registerAPI.registerInvalidAccount();

        });

    it('Login using valid credentials', async () => {

        //POST method to auth/login to send valid data in order to login 
        let accountLogin = await loginAPI.getValidLogin();

        //Using chai BDD assertions we want to expect that our login was successfull 
        await loginAPI.expectValidLogin(accountLogin, 60, "John", "Doe");

        });


    it('Login using invalid credentials', async () => {

        //POST method to auth/login to send invalid data in order to expect server status 400 
        await loginAPI.getInvalidLogin();

        });

});
