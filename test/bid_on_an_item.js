var randomProductAPI = require('../endpoints/products_random');
var loginAPI = require('../endpoints/login');
var bidPriceAPI = require('../endpoints/get_bid_price');
var postBidAPI = require('../endpoints/bid_post');
var deleteBidAPI = require('../endpoints/bid_delete');
var helper = require('../endpoints/helper');


describe('Bid on an Item: TS-003', () => {

     before( async () => {

         //POST method to auth/login to login using valid credential and get authentication token 
         validToken = await loginAPI.getToken();

      });

      after( async () => {

        //Teardown where we delete any bids that we send to the product
        await deleteBidAPI.deleteUserBid(validToken, validProductId);

      });
  

     beforeEach( async () => {
          
         //GET method to products/featured/random to choose which product to bid on 
         productid = await randomProductAPI.getRandomProductID();

         //Delay between tests when needed 
         helper.delay();

     });

    it('Bid on an item while signed in with an valid bid: 3.001', async () => {
 
         //GET method to bids/product to see what is the highest bid on the product 
         bid = await bidPriceAPI.getBid(productid);

         //For the after hook to use the same product id 
         validProductId = productid;

         //Body that we need to send 
         bidRequest = await helper.postValidBidBody(bid, productid);
        
         //POST method to bids/add to send the bid to the product with an authentication token 
         let postBidBody = await postBidAPI.bidPost(validToken, bidRequest);

         //Using chai BDD assertions we want to expect that our bid was successfull 
         await postBidAPI.expectBid(postBidBody, productid, bid + 1);

         //That we can see where out bid is send since the test is dynamic
         helper.showMe(postBidBody);
    
    });

    it('Bid on an item while signed in with an invalid bid: 3.002', async () => {
         
           //GET method to products to see what is the start price
           bid = await bidPriceAPI.getStartPrice(productid);
        
           //Invalid body that we need to send 
           bidRequest = await helper.postInvalidBidBody(bid, productid);
                
           //POST method to bids/add to send the invalid bid to the product with an authentication token and expect server status 400
           await postBidAPI.invalidBidPost(validToken, bidRequest);
        
    });

    it('Bid on an item while not signed in: 3.003', async () => {

           //GET method to bids/product to see what is the highest bid on the product 
           bid = await bidPriceAPI.getBid(productid);
        
           //Body that we need to send 
            bidRequest = await helper.postValidBidBody(bid, productid);
                
           //POST method to bids/add to send the bid to the product without an authentication token and expect server status 401
           await postBidAPI.unauthorizedbidPost(bidRequest);
        
    });
});