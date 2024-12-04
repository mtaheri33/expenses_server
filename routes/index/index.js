const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Here is a response for index');
});

module.exports = router;
