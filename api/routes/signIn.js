// This handles requests for the /signIn resource.

const express = require('express');
const mongoose = require('../mongoose/mongoose');

const router = express.Router();
const users = mongoose.users;

router.post('/', async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const success = await users.signIn(email, password);
  if (success) {
    res.status(200).send();
  }
  res.status(404).send();
});

module.exports = router;
