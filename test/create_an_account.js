var testData = require('../data/data');
var helper = require('../endpoints/helper')
var loginAPI = require('../endpoints/login')
var deleteAccountAPI = require('../endpoints/deactivate_accout')
var registerAPI = require('../endpoints/register');

describe('Create an Account: TS-002', () => {

    after( async () => {

        //POST method to auth/login to login using valid credential and get authentication token 
        accountToken = await loginAPI.getNewToken(validEmail);

        //POST method to auth/deactivate to deactive the randomly created account 
        await deleteAccountAPI.deactivateAccount(accountToken);

   });

    it('Create an account using valid information: 2.001', async () => {

         //Generate a random email for test purposes
         validEmail = testData.emails.randomEmail;

         //Show randomly generated email
         helper.showMe(validEmail);

         //POST method to auth/register to send the validEmail in order to create a new user 
         let newAccount = await registerAPI.registerAccount(validEmail);

         //Using chai BDD assertions we want to expect that our bid was successfull 
         await registerAPI.expectAccount(newAccount, "John", "Doe", validEmail);

        });

    it('Create an account using invalid information: 2.002', async () => {

         //POST method to auth/register to send invalid data in order to expect server status 400 
         await registerAPI.registerInvalidAccount();

        });
    });