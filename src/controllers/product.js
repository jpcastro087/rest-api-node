const Product = require('../models/product');
module.exports = {
  index: async (req, res, next) => {
      const products = await Product.find({});
      res.status(200).json(products);
  },

  getProductIds: async (req, res, next) => {
      const products = await Product.find({},{_id:1});
      res.status(200).json(products);
  },

  getProduct: async (req, res, next) => {
    const { productId } = req.params;
    const product = await Product.findById(productId);
    res.status(200).json(product);
  },

  newProduct: async (req, res, next) => {
      const newProduct = new Product(req.body);
      const product = await newProduct.save();
      res.status(200).json(product);
  },

  updateProduct: async (req, res, next) => {
    const { productId } = req.params;
    const product = req.body;
    const oldProduct = await Product.findByIdAndUpdate(productId, product);
    res.status(200).json({success:true});
  }

};
