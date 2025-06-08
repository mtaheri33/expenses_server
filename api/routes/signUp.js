// This handles requests for the /signup resource.

const express = require('express');
const mongooseHandler = require('../mongoose/mongooseHandler');

const router = express.Router();
const users = mongooseHandler.users;

router.post('/', async (req, res) => {
  /*
  Request:
  body required JSON {
    email required string
    password required string
  }

  Response:
  200
  400
  */
  const { email, password } = req.body;
  const user = await users.create(email, password);
  if (user) {
    res.status(200).send();
  }
  res.status(400).send();
});

module.exports = router;
