var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({ 'message': 'This is a test.' });
});

module.exports = router;
