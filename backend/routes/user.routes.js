const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const authMiddleware = require('../middleware/auth.middleware');

router.get('/me', authMiddleware.verifyToken, userController.getProfile);
router.put('/change-password', authMiddleware.verifyToken, userController.changePassword);
router.post('/forgot-password', userController.forgotPassword);
router.post('/reset-password/:token', userController.resetPassword);

// Regjistrime për kurse nga studentët
router.get('/me/enrollments', authMiddleware.verifyToken, userController.getMyEnrollments);

module.exports = router;
