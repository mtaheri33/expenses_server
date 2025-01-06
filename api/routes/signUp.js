// This handles requests for the /signUp resource.

const express = require('express');
const mongoose = require('../mongoose/mongoose');

const router = express.Router();
const users = mongoose.users;

router.post('/', async (req, res) => {
  const { email, password } = req.body;
  const user = await users.create(email, password);
  if (user) {
    res.status(200).send(user);
  }
  res.status(400).send();
});

module.exports = router;
