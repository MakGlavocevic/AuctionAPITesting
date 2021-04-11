var passwordAPI = require ('../endpoints/password');


describe('Forgot password: TS-010', () => {

    it('User wants to retrieve new password via the forgot password functionality using invalid data: RT-019', async () => {

     //POST method to auth/forgot_password to send out email and get response body
     forgotPasswordBody = await passwordAPI.forgotPassword();

     //Using chai BDD assertions we want to expect that our forgot password action was successfull
     await passwordAPI.expectForgotPassword(forgotPasswordBody);
    
    });

    it('User wants to retrieve new password via the forgot password functionality using invalid data: RT-020', async () => {

     //POST method to auth/forgot_password to send out invalid email and expect server status 400
     await passwordAPI.invalidForgotPassword();
    
    });
});