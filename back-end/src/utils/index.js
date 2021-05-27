const mongoose = require('mongoose'),
  crypto = require('crypto');

exports.ObjectIdCast = mongoose.Types.ObjectId;

exports.getMD5 = (password) => crypto.createHash('md5').update(password, 'utf8').digest('hex');

exports.resJsonP = (res, code, sucesso, retorno) => res.status(code).jsonp({ sucesso, retorno });