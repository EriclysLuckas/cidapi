const express = require('express');
const router = express.Router();
const cidController = require('../controllers/cidController');

router.get('/cids', cidController.getAll);
router.get('/cids/id/:id', cidController.getById);
router.get('/cids/code/:code', cidController.getByCode);
router.get('/cids/search', cidController.getByDescription);

module.exports = router;