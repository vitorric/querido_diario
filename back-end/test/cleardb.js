const { User } = require('../src/schemas/user');

module.exports = async ()  => {
  await User.deleteMany();
  return true;
};