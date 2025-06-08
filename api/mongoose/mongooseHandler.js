// This is the handler for all of the files that use mongoose.

const mongoose = require('mongoose');
const users = require('./users');

mongoose.connect(process.env.DATABASE_ADDRESS);

module.exports = {
  users,
};
