/** put all routes together here and export out  */

const router = require("express").Router();

const productRouter = require("./product");
const categoryRouter = require("./category");
const reviewRouter = require("./review");

router.use("/product", productRouter);
router.use("/category", categoryRouter);
router.use("/review", reviewRouter);

module.exports = router;
