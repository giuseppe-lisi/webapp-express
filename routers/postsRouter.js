const express = require('express');
const router = express.Router();
const postsController = require('../controllers/postsController')

router.get('/', postsController.index);
router.get('/:id', postsController.show);

module.exports = router; 