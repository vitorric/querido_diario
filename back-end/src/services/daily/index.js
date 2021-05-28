const { createDailyRepository, getDailyByIdRepository, listDailyByUserIdRepository,
    deleteDailyByIdRepository, updateDailyByIdRepository } = require('../../repositories/daily'),
  { ObjectIdCast } = require('../../utils');

exports.createDaily = async ({ description }, userId) => {
  if (!userId || !description) {
    throw { msg: 'Informações faltantes' };
  }

  return await createDailyRepository({ userId, description });
};

exports.getDailyById = async ({ dailyId }) => {
  if (!ObjectIdCast.isValid(dailyId)) {
    throw { msg: 'Dados inválidos' };
  }

  return await getDailyByIdRepository(dailyId);
};

exports.deleteDailyById = async ({ dailyId }) => {
  if (!ObjectIdCast.isValid(dailyId)) {
    throw { msg: 'Dados inválidos' };
  }

  deleteDailyByIdRepository(dailyId);

  return true;
};

exports.updateDailyById = async ({ dailyId, description }) => {
  if (!dailyId || !description) {
    throw { msg: 'Informações faltantes' };
  }

  if (!ObjectIdCast.isValid(dailyId)) {
    throw { msg: 'Dados inválidos' };
  }

  updateDailyByIdRepository(dailyId, { description });

  return true;
};

exports.listDailyByUserId = async ({page, rowsPerPage}, userId) => (await listDailyByUserIdRepository(userId, page, rowsPerPage))[0];