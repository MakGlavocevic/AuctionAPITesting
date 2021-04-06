var expect = require('chai').expect;
var randomProduct = require('../endpoints/random_product');
var login = require('../endpoints/login');
var bidPrice = require('../endpoints/get_bid_price');
var postBid = require('../endpoints/bid_post');


describe('smoke test suit', () => {

   
    it('As a signed in user place the highest bid on a item', async () => {

        //POST method to auth/login to login using valid credential and get authentication token 
        validToken = await login.getToken();

        //GET method to products/featured/random to choose which product to bid on 
        productid = await randomProduct.getRandomProductID();

        //GET method to bids/product to see what is the highest bid on the product 
        bid = await bidPrice.getProductPrice(productid);

        //Body that we need to send 
        const bidRequest = {
            "amount": bid + 1 ,
            "productId": productid
        };
        
        //POST method to bids/add to send the bid to the product with an authentication token 
        let postBidBody = await postBid.bidPost(validToken, bidRequest)

        //Using chai BDD assertions we want to expect that our bid was successfull 
        expect(postBidBody.productId).to.eq(productid);
        expect(postBidBody.amount).to.eq(bid + 1);

        //That we can see where out bid is send since the test is dynamic
        console.log(postBidBody);

        });
});



    
