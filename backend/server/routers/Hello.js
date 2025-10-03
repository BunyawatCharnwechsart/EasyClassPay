const express = require('express');
const router = express.Router();

const hello = require('../controllers/hello');

// GET /users
router.get("/hello",hello.getHello);

module.exports = router;
