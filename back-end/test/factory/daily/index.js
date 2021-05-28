const { User } = require('../../../src/schemas/user'),
  { Daily } = require('../../../src/schemas/daily');

exports.createOneDaily = async (callback) => {
  const user = await User.findOne({});
  const daily = await Daily.create({
    userId: user._id,
    description: `Novo registro criado em ${new Date().getTime()}`
  });

  callback(daily);
};