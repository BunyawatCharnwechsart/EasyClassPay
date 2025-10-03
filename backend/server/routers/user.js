const express = require('express');
const router = express.Router();

const { username } = require('../controllers/user');

// GET /users
router.get("/", userController.getUsers);

// POST /users
router.post("/", userController.createUser);

module.exports = router;
