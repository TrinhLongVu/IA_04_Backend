const express = require('express');
const { register, login, getProfile } = require('../controllers/Auth');
const authMiddleware = require('../middlewares/AuthMiddleware.js');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/profile', authMiddleware, getProfile);

module.exports = router;