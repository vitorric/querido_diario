const express = require('express'),
  morgan = require('morgan'),
  path = require('path'),
  dotenv = require('dotenv'),
  app = express();

dotenv.config({ path: path.resolve(`.env.${process.env.NODE_ENV}`) });

app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Headers', 'Content-type, Accept, Authorization');
  next();
});

require('./src/middleware/passport')();

app.use(
  morgan('dev'),
  express.json({ limit: '1000MB', extended: true }),
  express.urlencoded({ limit: '2000MB', extended: true })
);

require('./src/routes')(app);

app.set('port', process.env.PORT || 3000);

module.exports = app;