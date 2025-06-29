// This handles requests for the /signin resource.

const express = require('express');
const users = require('../mongoose/users');

const router = express.Router();

router.post('/', async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await users.signIn(email, password);
    if (user) {
      res.status(200).send();
    }
    res.status(401).send();
  } catch (error) {
    next(error);
  }
});

module.exports = router;
