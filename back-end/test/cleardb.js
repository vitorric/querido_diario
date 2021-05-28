const { User } = require('../src/schemas/user'),
  { Daily } = require('../src/schemas/daily');

module.exports = async ()  => {
  await User.deleteMany();
  await Daily.deleteMany();
  return true;
};