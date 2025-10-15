const express = require('express');
const router = express.Router();

const bill = require('../controllers/bill');

router.get("/bill",bill.allBill);
router.get("/bill/paid", bill.paidBill);
router.get("/bill/pending", bill.pendingBill);
router.get("/bill/monthBill", bill.monthBill);
router.get("/bill/getBill", bill.getBill);

module.exports = router;