var testData = require('../data/data');
const request = require('supertest');
var expect = require('chai').expect;

//GET method for categories endpoint to see active categories on the site
const getCategories = async () => {

    const rescategories = await request(testData.apiLinks.baseURL)
        .get(testData.endpoint.categories)
        .expect(200);

    return rescategories;

};

//Using chai BDD assertions we want to expect that all of the categories are active
const expectCategories = async (rescategories) => {
  
    expect(rescategories).to.not.be.empty;
    expect(rescategories.body[0].id).to.equal(201);
    expect(rescategories.body[1].id).to.equal(202);
    expect(rescategories.body[2].id).to.equal(203);
    expect(rescategories.body[3].id).to.equal(204);
    expect(rescategories.body[4].id).to.equal(205);
    expect(rescategories.body[5].id).to.equal(206);
    expect(rescategories.body[6].id).to.equal(207);
    expect(rescategories.body[7].id).to.equal(208);
    expect(rescategories.body[8].id).to.equal(209);

};

module.exports = {
    getCategories,
    expectCategories
  
    };