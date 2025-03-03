// This is for the users MongoDB collection.

const mongoose = require('mongoose');
const { hashPassword, checkPassword } = require('../utilities');

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
});
const User = mongoose.model('User', userSchema);

async function readByEmail(email) {
  return await User.find({ email });
};

async function create(email, password) {
  const search = await readByEmail(email);
  if (search.length !== 0) {
    return false;
  }
  const hashedPassword = await hashPassword(password);
  const user = new User({ email, password: hashedPassword });
  return await user.save();
};

async function signIn(email, password) {
  const search = await readByEmail(email);
  if (search.length === 0) {
    return false;
  }
  const user = search[0];
  return await checkPassword(password, user.password);
}

module.exports = {
  create,
  signIn,
};
