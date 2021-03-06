const mongoose = require('mongoose');
const Product = require('./models/product');
const uri = 'mongodb+srv://Anjali:Anjali@123@cluster0.16cq7.mongodb.net/ProductDetail?retryWrites=true&w=majority'
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
  console.log('Connected to database!')
}).catch(() => {
  console.log('Connection failed!')
});

const createProduct = async (req, res, next) => {
  const createdProduct = new Product({
    name: req.body.name,
    price: req.body.price,
    stock: req.body.stock,
    desc: req.body.desc,
  });

  const result = await createdProduct.save();
  console.log(typeof createdProduct._id);
  res.json(result);
};

const getProducts = async (req, res, next) => {
  const products = await Product.find().exec();
  res.json(products);
}

exports.createProduct = createProduct;
exports.getProducts = getProducts;
