module.exports = async (expect, request, app) => {

  describe('File /routes/auth/create.js', () => {

    describe('Service - /POST user.createUser', () => {

      let user = {};
      beforeEach(() => {
        user = {
          name: 'Vitor Ricardo',
          password: '123456',
          email: 'vitorricardo@outlook.com'
        };
      });

      it('should be Error: no name', (done) => {
        delete user.name;
        request(app)
          .post('/api/auth/create')
          .set('content-type', 'application/json')
          .send(user)
          .expect(200)
          .end((err, res) => {
            if (err) return done(err);
            expect(res.body.sucesso).to.be.false;
            expect(res.body.retorno).to.be.an('object')
              .that.has.all.keys('msg');
            done();
          });
      });

      it('should be Error: no email', (done) => {
        delete user.email;
        request(app)
          .post('/api/auth/create')
          .set('content-type', 'application/json')
          .send(user)
          .expect(200)
          .end((err, res) => {
            if (err) return done(err);
            expect(res.body.sucesso).to.be.false;
            expect(res.body.retorno).to.be.an('object')
              .that.has.all.keys('msg');
            done();
          });
      });

      it('should be Error: no password', (done) => {
        delete user.password;
        request(app)
          .post('/api/auth/create')
          .set('content-type', 'application/json')
          .send(user)
          .expect(200)
          .end((err, res) => {
            if (err) return done(err);
            expect(res.body.sucesso).to.be.false;
            expect(res.body.retorno).to.be.an('object')
              .that.has.all.keys('msg');
            done();
          });
      });

      it('should be success', (done) => {
        request(app)
          .post('/api/auth/create')
          .set('content-type', 'application/json')
          .send(user)
          .expect(200)
          .end((err, res) => {
            if (err) return done(err);
            expect(res.body.sucesso).to.be.true;
            expect(res.body.retorno).to.be.an('object');
            expect(res.body.retorno.token).to.be.an('string');
            expect(res.body.retorno.user).to.be.an('object')
              .that.has.all.keys('name', 'email', 'role');
            done();
          });
      });

      it('should be Error: user already exist', (done) => {
        request(app)
          .post('/api/auth/create')
          .set('content-type', 'application/json')
          .send(user)
          .expect(200)
          .end((err, res) => {
            if (err) return done(err);
            expect(res.body.sucesso).to.be.false;
            expect(res.body.retorno).to.be.an('object')
              .that.has.all.keys('msg');
            done();
          });
      });
    });
  });
};