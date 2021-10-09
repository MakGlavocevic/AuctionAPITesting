var testData = require('../data/data');
const request = require('supertest');
var expect = require('chai').expect;

//GET method to products/search to search for a query 
const searchProduct = async (searchTerm) => {

    const searchres = await request(testData.apiLinks.baseURL)
        .get(`products/search?page=0&query=${searchTerm}`)
        .expect(200);
   
        var undefined

   while(searchres.body.products != null && searchres.body.products != '' && searchres.body.products != undefined) {
      
    return searchres.body;

    };
};

//GET method to products/search to search for a invalid query 
const searchInvalidProduct = async (searchTerm) => {

    const searchinvalidres = await request(testData.apiLinks.baseURL)
        .get(`products/search?page=0&query=${searchTerm}`)
        .expect(200);
      
    return searchinvalidres.body;

};

//Function to 'randomly' choose an item to search 
function findItem () {

    items = Array('16GB DDR4 RAM', 'Leather Bag', 'Sunglasses', 'Apple Watch', 'Dell XPS', 'Boxing Gloves');
    item = items[Math.floor(Math.random() * items.length)];

    return item;
};

//Using chai BDD assertions we want to expect that our search was successfull
const expectSearch = async (searchResultBody, searchItem) => {

    expect(searchResultBody.products[0].name).to.eq(searchItem);
    
};

//Using chai BDD assertions we want to expect that our search was empty
const expectInvalidSearch = async (resultInvalidBody) => {

    expect(resultInvalidBody.products).to.be.empty;
    
};

module.exports = {
    searchProduct,
    findItem,
    expectSearch,
    expectInvalidSearch,
    searchInvalidProduct

};