const express = require('express'),
  morgan = require('morgan'),
  path = require('path'),
  dotenv = require('dotenv'),
  app = express();

dotenv.config({ path: path.resolve(`.env.${process.env.NODE_ENV}`) });

app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Headers', 'Content-type, Accept, Authorization');

  console.log('IP: ', req.connection.remoteAddress);

  next();
});

/**
 * @description inicia o modulo de passaport jwt
 */
require('./src/services/passport')();

app.use(
  morgan('dev')
);

require('./src/routes')(app);

app.set('port', process.env.PORT || 3000);

module.exports = app;