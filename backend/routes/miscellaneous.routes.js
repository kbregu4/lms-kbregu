const express = require('express');
const router = express.Router();
const miscController = require('../controllers/miscellaneous.controller');

router.get('/stats', miscController.getStats);

module.exports = router;
