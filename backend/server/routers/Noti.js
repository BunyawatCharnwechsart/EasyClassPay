const express = require('express');
const router = express.Router();

const notification = require("../controllers/noti");

//Get
router.get("/notification",notification.getAllNoti);
router.get("/MessageNoti",notification.getMessageNoti);

module.exports = router;