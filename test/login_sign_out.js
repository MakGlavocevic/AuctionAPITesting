var loginAPI = require('../endpoints/login');


describe('Login / Sign out: TS-008', () => {


    it('Login using valid credentials: RT-016', async () => {

         //POST method to auth/login to send valid data in order to login 
         let accountLogin = await loginAPI.getValidLogin();

         //Using chai BDD assertions we want to expect that our login was successfull 
         await loginAPI.expectValidLogin(accountLogin, 60, "John", "Doe");
 
        });


    it('Login using invalid credentials: RT-016', async () => {

         //POST method to auth/login to send invalid data in order to expect server status 401 
         await loginAPI.getInvalidLogin();

        });
    });
