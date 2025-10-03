const express = require('express');
const router = express.Router();

const { username } = require('../controllers/user');

router.get("/user",username);

module.exports = router;
