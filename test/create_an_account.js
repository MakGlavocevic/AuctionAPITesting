var testData = require('../data/data');
var helper = require('../endpoints/helper')
var registerAPI = require('../endpoints/register');

describe('Create an Account: TS-002', () => {

    it('Create an account using valid information: RT-001', async () => {

         //Generate a random email for test purposes
         const validEmail = testData.emails.randomEmail;

         //Show randomly generated email
         helper.showMe(validEmail);

         //POST method to auth/register to send the validEmail in order to create a new user 
         let newAccount = await registerAPI.registerAccount(validEmail);

         //Using chai BDD assertions we want to expect that our bid was successfull 
         await registerAPI.expectAccount(newAccount, "John", "Doe", validEmail);

        });

    it('Create an account using invalid information: RT-002', async () => {

         //POST method to auth/register to send invalid data in order to expect server status 400 
         await registerAPI.registerInvalidAccount();

        });
    });