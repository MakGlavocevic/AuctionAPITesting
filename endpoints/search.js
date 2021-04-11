var testData = require('../data/data');
const request = require('supertest');
var expect = require('chai').expect;

//GET method to products/search to search for a query 
searchProduct = async (searchTerm) => {

    const searchres = await request(testData.apiLinks.baseURL)
        .get(`products/search?page=0&query=${searchTerm}`)
        .expect(200);
   
   while(searchres.body.products != null && searchres.body.products != '') {
      
    return searchres.body;

    };
};

//GET method to products/search to search for a invalid query 
searchInvalidProduct = async (searchTerm) => {

    const searchinvalidres = await request(testData.apiLinks.baseURL)
        .get(`products/search?page=0&query=${searchTerm}`)
        .expect(200);
      
    return searchinvalidres.body;

};

//Function to 'randomly' choose an item to search 
function findItem () {

    items = Array('16GB DDR4 RAM', 'Gucci Bag', 'Leather Bag', 'LV Red Bag', 'Sunglasses', 'Apple Watch', 'Dell XPS', 'Boxing Gloves', 'Tennis Racquet');
    item = items[Math.floor(Math.random() * items.length)];

    return item;
};

//Using chai BDD assertions we want to expect that our search was successfull
expectSearch = async (searchResultBody, searchItem) => {

    expect(searchResultBody.products[0].name).to.eq(searchItem);
    
};

//Using chai BDD assertions we want to expect that our search was empty
expectInvalidSearch = async (resultInvalidBody) => {

    expect(resultInvalidBody.products).to.be.empty;
    
};

module.exports = {
    searchProduct,
    findItem,
    expectSearch,
    expectInvalidSearch,
    searchInvalidProduct

};