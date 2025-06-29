// This handles requests for the /signup resource.

const express = require('express');
const mongooseHandler = require('../mongoose/mongooseHandler');

const router = express.Router();
const users = mongooseHandler.users;

router.post('/', async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await users.create(email, password);
    if (user) {
      res.status(201).send();
    }
    res.status(409).send();
  } catch (error) {
    next(error);
  }
});

module.exports = router;
