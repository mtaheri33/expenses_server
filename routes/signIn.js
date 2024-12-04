const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  res.send('Here is a response for sign in post');
});

module.exports = router;
