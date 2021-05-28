const { Daily } = require('../../schemas/daily'),
  { ObjectIdCast } = require('../../utils');

exports.createDailyRepository = async daily => {
  try {
    return Daily.create(daily);
  } catch (error) {
    console.log('Error in createDailyRepository: ', error);
  }
};

exports.getDailyByIdRepository = _id => {
  try {
    return Daily.findOne({ _id: ObjectIdCast(_id) }).exec();
  } catch (error) {
    console.log('Error in getDailyByIdRepository', error);
  }
};

exports.updateDailyByIdRepository = (_id, data) => {
  try {
    return Daily.updateOne({ _id: ObjectIdCast(_id) }, {
      $set: data
    }).exec();
  } catch (error) {
    console.log('Error in updateDailyByIdRepository', error);
  }
};

exports.deleteDailyByIdRepository = _id => {
  try {
    return Daily.updateOne({ _id: ObjectIdCast(_id) }, {
      $set: {
        delete: true
      }
    }).exec();
  } catch (error) {
    console.log('Error in deleteDailyByIdRepository', error);
  }
};

exports.listDailyByUserIdRepository = (userId, page, rowsPerPage) => {
  try {
    return Daily.aggregate([
      {
        $match: {
          userId: ObjectIdCast(userId),
          delete: false
        }
      },
      {
        $sort: {
          createdAt: -1
        }
      },
      {
        $facet: {
          metadata: [{ $count: 'total' }],
          dailies: [
            { $skip: (rowsPerPage * (page - 1)) },
            { $limit: rowsPerPage }
          ]
        }
      },
      { $unwind: { path: '$metadata' } }
    ]).exec();
  } catch (error) {
    console.log('Error in listDailyByUserIdRepository', error);
  }
};