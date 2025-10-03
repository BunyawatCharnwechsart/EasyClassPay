const express = require('express');
const router = express.Router();

const users = require('../controllers/user');

//Get
router.get("/users",users.getUsers);
router.get("/bills",users.getBill);

module.exports = router;