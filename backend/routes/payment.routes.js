const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/payment.controller');
const authMiddleware = require('../middleware/auth.middleware');

router.post('/checkout', authMiddleware.verifyToken, paymentController.checkout);
router.post('/webhook', paymentController.webhook); // për integrime me shërbime pagesash, opsionale

module.exports = router;
