const { getMD5 } = require('../../../../src/utils/index');

module.exports = async (expect, request, app) => {
  describe('File /routes/auth/login.js', () => {

    describe('Service - /POST user.loginUser', () => {

      let user = {};
      beforeEach(() => {
        user = {
          password: getMD5('123456'),
          email: 'vitorricardo@outlook.com'
        };
      });

      it('should be Error: Unauthorized', (done) => {
        user.email = 'teste@email.com';
        request(app)
          .post('/api/auth/login')
          .set('content-type', 'application/json')
          .send(user)
          .expect(401)
          .end((err) => {
            if (err) return done(err);
            done();
          });
      });


      it('should be Error: password wrong', (done) => {
        user.password = getMD5('123');
        request(app)
          .post('/api/auth/login')
          .set('content-type', 'application/json')
          .send(user)
          .expect(401)
          .end((err) => {
            if (err) return done(err);
            done();
          });
      });

      it('should be Error: success', (done) => {
        request(app)
          .post('/api/auth/login')
          .set('content-type', 'application/json')
          .send(user)
          .expect(200)
          .end((err, res) => {
            if (err) return done(err);
            expect(res.body.success).to.be.true;
            expect(res.body.payload).to.be.an('object');
            expect(res.body.payload.token).to.be.an('string');
            expect(res.body.payload.user).to.be.an('object')
              .that.has.all.keys('name', 'email', 'role');

            global.tokenUser = `Bearer ${res.body.payload.token}`;
            done();
          });
      });

    });

  });
};