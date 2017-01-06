'use strict';
const express = require('express');
const router = express.Router();
module.exports = router;

router.get('/people', function (req, res, next) {
  //give all people
  res.send('people');
});
