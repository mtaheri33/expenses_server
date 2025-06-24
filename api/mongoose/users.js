// This is for the users MongoDB collection.

const bcrypt = require('bcrypt');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});
const User = mongoose.model('User', userSchema);

async function hashPassword(password) {
  const salt = await bcrypt.genSalt(12);
  return await bcrypt.hash(password, salt);
}

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

async function checkPassword(password, hashedPassword) {
  return await bcrypt.compare(password, hashedPassword);
}

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
