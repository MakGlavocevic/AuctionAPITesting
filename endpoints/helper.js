
//Console log 
function showMe (something) {
    console.log(something)
};

//Our valid bid POST body
function postValidBidBody (bid, productid) {

    const bidRequest = {
        "amount": bid + 1 ,
        "productId": productid
    };

    return bidRequest
};

//Our invalid bid POST body
function postInvalidBidBody (bid, productid) {

    const bidRequest = {
        "amount": bid - 1 ,
        "productId": productid
    };

    return bidRequest
};

//Delay between tests when needed 
function delay(interval) 
{
   return it('should delay', done => 
   {
      setTimeout(() => done(), interval)

   }).timeout(interval + 100) 
};

module.exports = {
    showMe,
    postValidBidBody,
    postInvalidBidBody,
    delay
    
    };
