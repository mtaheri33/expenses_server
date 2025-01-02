// This is for the users MongoDB collection.

const mongoose = require('mongoose');

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
  const user = new User({ email, password });
  return await user.save();
};

async function signIn(email, password) {
  const search = await readByEmail(email);
  if (search.length === 0) {
    return false;
  }
  const user = search[0];
  if (password !== user.password) {
    return false;
  }
  return true;
}

module.exports = {
  create,
  signIn,
};
