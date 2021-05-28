const { Schema } = require('mongoose'),
  ObjectId = Schema.ObjectId,
  conn = require('../../conn/index');

const DailySchema = new Schema(
  {
    description: {
      type: String,
      required: true
    },
    userId: {
      type: ObjectId,
      ref: 'User',
      required: true
    },
    delete: {
      type: Boolean,
      default: 0
    }
  }, {
    collection: 'Daily',
    timestamps: true
  }
);

exports.Daily =  conn.model('Daily', DailySchema);
