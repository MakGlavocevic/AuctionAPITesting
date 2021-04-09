var testData = require('../data/data');
var helper = require('../endpoints/helper')
var searchAPI = require('../endpoints/search');


describe('Search function: TS-004', () => {


     it('Search for a product that exists: RT-006', async () => {

        //Function to 'randomly' choose an item to search 
        searchItem = await searchAPI.findItem();

        //GET method to products/search to search for a query 
        searchResultBody = await searchAPI.searchProduct(searchItem);
     
        //Using chai BDD assertions we want to expect that our search was successfull
        await searchAPI.expectSearch(searchResultBody, searchItem);
    
     });


     it('Search for a product that does not exists: RT-007', async () => {

        //GET method to products/search to search for a invalid query
        resultInvalidBody = await searchAPI.searchInvalidProduct(testData.searchTerms.invalidSearchTerm);

        //Using chai BDD assertions we want to expect that our search was empty
        await searchAPI.expectInvalidSearch(resultInvalidBody);
        
     });
});