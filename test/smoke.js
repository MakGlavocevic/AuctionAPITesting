var randomProductAPI = require('../endpoints/products_random');
var loginAPI = require('../endpoints/login');
var bidPriceAPI = require('../endpoints/get_bid_price');
var postBidAPI = require('../endpoints/bid_post');
var helper = require('../endpoints/helper');


describe('Smoke test suit: TS-001', () => {
    let postBidBody;

    before( async () => {

         //POST method to auth/login to login using valid credential and get authentication token 
         validToken = await loginAPI.getToken();

     });

     after( async () => {

         //That we can see where out bid is send since the test is dynamic
         helper.showMe(postBidBody);

    });
   
    it('As a signed in user place the highest bid on a item: 1.001', async () => {

         //GET method to products/featured/random to choose which product to bid on 
         productid = await randomProductAPI.getRandomProductID();

         //GET method to bids/product to see what is the highest bid on the product 
         bid = await bidPriceAPI.getBid(productid);

         //Body that we need to send 
         bidRequest = await helper.postValidBidBody(bid, productid);
        
         //POST method to bids/add to send the bid to the product with an authentication token 
         postBidBody = await postBidAPI.bidPost(validToken, bidRequest);

         //Using chai BDD assertions we want to expect that our bid was successfull 
         await postBidAPI.expectBid(postBidBody, productid, bid + 1);

        });
});



    
