const express = require("express");
const router = express();

router.use("/api/users", require("./UserRoutes"));
router.use("/api/products", require("./ProductRoutes"));
router.use("/api/orders", require("./OrderRoutes"));
router.use("/api/cart", require("./CartRoutes"));

//test route
router.get("/", (req, res) => {
  res.send("API Working!");
});

module.exports = router;