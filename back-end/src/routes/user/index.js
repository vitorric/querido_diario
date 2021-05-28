const router = require('express').Router(),
  passport = require('passport'),
  passportUser = passport.authenticate('userAuth', { session: false });

module.exports = () => {

  // Rotas Produto
  router.post('/daily/create', passportUser, require('./daily/create')());
  router.post('/daily/list', passportUser, require('./daily/list')());
  router.get('/daily/get/:dailyId', passportUser, require('./daily/get')());
  router.put('/daily/update', passportUser, require('./daily/update')());
  router.delete('/daily/delete/:dailyId', passportUser, require('./daily/delete')());


  return router;
};