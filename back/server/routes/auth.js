// back/server/routes/auth.js

import express from 'express';
import { register, login, getMe, logout } from '../controllers/auth.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/me', protect, getMe);
router.post('/logout', protect, logout);

export default router;


// const express = require('express');
// const router = express.Router();
// const {
//   protect
// } = require('../middleware/auth');
// const {
//   register,
//   login,
//   getMe,
//   logout
// } = require('../controllers/auth');
// router.post('/register', register);
// router.post('/login', login);
// router.get('/me', protect, getMe);
// router.post('/logout', protect, logout);
// module.exports = router;