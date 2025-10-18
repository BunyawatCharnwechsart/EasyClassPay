const express = require('express');
const router = express.Router();
const MonthBill = require('../controllers/MonthBill');

router.post("/MonthBill", MonthBill.MonthBill);

module.exports = router;