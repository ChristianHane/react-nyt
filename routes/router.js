const express = require('express');
const nytAPIController = require('../controllers/nytAPIController.js');
const articleController = require('../controllers/articleController');

const router = express.Router();

router.route('/api/nytimes').get(nytAPIController.get);
router.route('/api/articles').get(articleController.get);
router.route('/api/articles').patch(articleController.patch);
router.route('/api/articles').post(articleController.post);
router.route('/api/articles').delete(articleController.remove);

module.exports = router;
