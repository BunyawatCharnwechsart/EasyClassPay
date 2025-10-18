const express = require('express');
const router = express.Router();
const createBill = require('../controllers/createBill');

router.post("/createBill", createBill.createBill);

module.exports = router;