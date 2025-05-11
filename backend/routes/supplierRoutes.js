const express = require("express");
const router = express.Router();
const supplierController = require("../controllers/supplierController");

router.post("/add", supplierController.addSupplier);
router.get("/", supplierController.getSuppliers);

module.exports = router;
