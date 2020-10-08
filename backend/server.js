const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();

// Load all the Environment Variables
dotenv.config();

// import error handler middleware
const errorHandler = require("./middlewares/error");

app.use(express.static(path.join(__dirname, "../client/build")));

// import function to connect to the database
const connectDB = require("./config/db");

app.use(cors());

// Route Files
const productRoutes = require("./routes/product");
const userRoutes = require("./routes/user");
const orderRoutes = require("./routes/order");

// parese body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// register logging middleware and use it  only in development mode
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// register different routes
app.use("/api/products", productRoutes);
app.use("/api/user", userRoutes);
app.use("/api/order", orderRoutes);

app.get("/api/config/paypal", (req, res) => res.send(process.env.PAYPAL_ID));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "../client/build/index.html"));
});

//use error handler middleware after all the routes
app.use(errorHandler);

// connect to the database and only start app if-
// successfully connected to database
connectDB(() => {
  app.listen(process.env.PORT, () => {
    console.log(
      `app is running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`
    );
  });
});
