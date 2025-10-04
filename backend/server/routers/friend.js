const express = require('express');
const router = express.Router();

const friend = require('../controllers/friend');

router.get("/friend",friend.getfriend);

module.exports = router;