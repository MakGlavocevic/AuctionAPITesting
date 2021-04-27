var productsNewAPI = require('../endpoints/products_new');
var productsLastAPI = require('../endpoints/product_last');

describe('Homepage: TS-007', () => {

    it('New arrivals section has item in it: 7.003', async () => {

        //GET method to products/new so that we can expect 200 and see what are the new items
        newProductsBody = await productsNewAPI.getProductsNew();

        //Using chai BDD assertions we want to expect that our new products endpoint doesn't return an empty body 
        await productsNewAPI.expectNewProducts(newProductsBody);
   
    });

    it('Last chance section has item in it: 7.004', async () => {

        //GET method to products/last so that we can expect 200 and see what are the items with the closest deadline
        lastProductsBody = await productsLastAPI.getProductsLast();

        //Using chai BDD assertions we want to expect that our last products endpoint doesn't return an empty body 
        await productsLastAPI.expectLastProducts(lastProductsBody);
       
    });
});