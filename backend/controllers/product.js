const asyncHandler = require("../middlewares/async");
const ErrorResponse = require("../utils/errorResponse");
// const products = require("./DB/products");
const productDB = require("./DB/productDB");

// @desc        Get all products
// @route       POST /api/products
// @access      public
exports.getProducts = asyncHandler(async (req, res, next) => {
  const products = await productDB.getAllProducts();
  if (!products) {
    return next(new ErrorResponse("Bootcamp not created", 404));
  }
  res.status(200).json({
    status: "success",
    body: products,
  });
});

// @desc        Get single product
// @route       POST /api/products/:id
// @access      public
exports.getProduct = asyncHandler(async (req, res, next) => {
  const product = await productDB.findProduct(req.params.id);
  if (!product) {
    return next(
      new ErrorResponse(`Product not found with id ${req.params.id}`, 404)
    );
  }
  res.status(200).json({
    status: "success",
    body: product,
  });
});
