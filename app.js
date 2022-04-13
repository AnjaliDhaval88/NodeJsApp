const express = require('express');
const bodyParser = require('body-parser');
const mongoPractice = require('./mongoose');


const app = express();

app.use(bodyParser.json());

app.post('/createProducts', mongoPractice.createProduct);

app.get('/getProducts', mongoPractice.getProducts);

app.listen(3000);