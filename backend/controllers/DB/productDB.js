const asyncHandler = require("../../middlewares/async");
const Product = require("../../models/product");

exports.findProduct = asyncHandler(async (id) => {
  const product = await Product.findOne({ _id: id });
  console.log(product);
  return product;
});

exports.getAllProducts = asyncHandler(async () => {
  const products = await Product.find();
  console.log(products);
  return products;
});
