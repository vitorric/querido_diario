/* eslint-disable no-undef */
process.env.NODE_ENV = !process.env.NODE_ENV ? 'test' : process.env.NODE_ENV;
const chai = require('chai'),
  app = require('../server'),
  chaiHttp = require('chai-http'),
  request = require('supertest'),
  clearDB = require('./cleardb');

let expect = chai.expect;

chai.use(chaiHttp);
chai.assert;

// Usuado para as rotas autenticadas do usuario
global.tokenUser = '';

clearDB();

// Utils
require('./utils')(expect);


// ## Routes
// -- Auth:
require('./routes/auth/create')(expect, request, app);
require('./routes/auth/login')(expect, request, app);

// ## Routes
// -- User - Daily:
require('./routes/user/daily/create')(expect, request, app);
require('./routes/user/daily/list')(expect, request, app);
require('./routes/user/daily/get')(expect, request, app);
require('./routes/user/daily/delete')(expect, request, app);
require('./routes/user/daily/update')(expect, request, app);