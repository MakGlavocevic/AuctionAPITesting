Command to install packages in your testing folder: 

npm init -y

npm i --save-dev supertest mocha chai @babel/cli @babel/core @babel/node @babel/register @babel/preset-env @babel/plugin-transform-runtime dotenv chance

--------------------------------------------------------------------------------------

Add in package.json "test": "mocha --timeout 10000"

Make a .env file where you will set your own credentials

--------------------------------------------------------------------------------------

Start test with npm test 

or 

npm test -- --grep 'name of the test'

