const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

// Routes for user operations
router.get('/', userController.getAllUsers); // Get all users
router.post('/register', userController.createUser); // Register a new user
router.post('/login', userController.validateUser); // Login user

module.exports = router;
