var testData = require('../data/data');
var searchAPI = require('../endpoints/search');

describe('Search function: TS-004', () => {

     it('Search for a product that exists: 4.001', async () => {

        //Function to 'randomly' choose an item to search 
        searchItem = await searchAPI.findItem();
console.log(searchItem);
        //GET method to products/search to search for a query 
        searchResultBody = await searchAPI.searchProduct(searchItem);
     
        //Using chai BDD assertions we want to expect that our search was successfull
        await searchAPI.expectSearch(searchResultBody, searchItem);

     });

     it('Search for a product that does not exists: 4.002', async () => {

        //GET method to products/search to search for a invalid query
        resultInvalidBody = await searchAPI.searchInvalidProduct(testData.searchTerms.invalidSearchTerm);

        //Using chai BDD assertions we want to expect that our search was empty
        await searchAPI.expectInvalidSearch(resultInvalidBody);
        
     });
});