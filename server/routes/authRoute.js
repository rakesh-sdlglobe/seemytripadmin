const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth')
// Signup Route
router.post('/signup', authController.signup);

// Login Route
router.post('/login', authController.login);

router.post('/auth/google', authController.googleAuth);
module.exports = router;
