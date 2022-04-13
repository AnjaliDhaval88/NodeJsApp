const mongoose = require('mongoose');

const productModel = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    stock: { type: Number, require: true },
    desc: { type: String, require: false }
});

module.exports = mongoose.model('Product', productModel);