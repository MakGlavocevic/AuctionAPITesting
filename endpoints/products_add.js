var testData = require('../data/data');
const request = require('supertest');

//POST method to add as the user items for biding
const addProduct = async () => {
    
    const productData = {
        "card": {
            "cardNumber": "string",
            "cvc": 0,
            "expirationMonth": 0,
            "expirationYear": 0,
            "name": "string"
          },
          "city": "string",
          "color": "BLACK",
          "country": "string",
          "description": "string",
          "endDate": "2021-04-27T08:07:20.958Z",
          "featured": true,
          "images": [
            "string"
          ],
          "name": "string",
          "payPal": {
            "orderId": "string"
          },
          "phone": "string",
          "shipping": true,
          "size": "EXTRA_LARGE",
          "startDate": "2021-04-27T08:07:20.958Z",
          "startPrice": 0,
          "street": "string",
          "subcategoryId": 0,
          "zip": "string"
    };

    const registerres = await request(testData.apiLinks.baseURL)
        .post(testData.endpoint.addProduct)
        .send(productData)
        .expect(200);

return registerres.body.person;

};