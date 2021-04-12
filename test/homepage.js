var productsNewAPI = require('../endpoints/products_new');
var productsLastAPI = require('../endpoints/product_last');

describe('Homepage: TS-007', () => {

    it('New arrivals section has item in it: 7.003', async () => {

        newProductsBody = await productsNewAPI.getProductsNew();

        await productsNewAPI.expectNewProducts(newProductsBody);
   
    });

    it('Last chance section has item in it: 7.004', async () => {

        lastProductsBody = await productsLastAPI.getProductsLast();

        await productsLastAPI.expectLastProducts(lastProductsBody);
       
    });
});
