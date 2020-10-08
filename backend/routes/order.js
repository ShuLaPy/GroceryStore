const express = require("express");
const router = express.Router();
const order = require("../controllers/order");
const auth = require("../middlewares/auth");

router.post("/", auth, order.addOrderItems);
router.get("/userorders", auth, order.getUserOrders);
router.get("/:id", auth, order.getOrderById);
router.put("/:id/pay", auth, order.updatetoPaid);


module.exports = router;
