// This handles requests for the /signin resource.

const express = require('express');
const mongooseHandler = require('../mongoose/mongooseHandler');

const router = express.Router();
const users = mongooseHandler.users;

router.post('/', async (req, res, next) => {
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
  try {
    const { email, password } = req.body;
    const success = await users.signIn(email, password);
    if (success) {
      res.status(200).send();
    }
    res.status(400).send();
  } catch (error) {
    next(error);
  }
});

module.exports = router;
