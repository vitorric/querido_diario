module.exports = async (expect, request, app) => {
  describe('File /routes/user/daily/create', () => {

    describe('Service - /POST daily.createDaily', () => {

      let daily = {};
      beforeEach(() => {
        daily = {
          'description': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        };
      });

      it('should be Error: without token', (done) => {
        request(app)
          .post('/api/user/daily/create')
          .expect(401)
          .end((err) => {
            if (err) return done(err);
            done();
          });
      });

      it('should be Error: no description', (done) => {
        request(app)
          .post('/api/user/daily/create')
          .send({})
          .set('Authorization', global.tokenUser)
          .expect(200)
          .end((err, res) => {
            if (err) return done(err);
            expect(res.body.success).to.be.false;
            expect(res.body.payload).to.be.an('object')
              .that.has.all.keys('msg');
            done();
          });
      });

      it('should be success', (done) => {
        request(app)
          .post('/api/user/daily/create')
          .send(daily)
          .set('Authorization', global.tokenUser)
          .expect(200)
          .end((err, res) => {
            if (err) return done(err);
            expect(res.body.success).to.be.true;
            expect(res.body.payload).to.be.an('object');

            done();
          });
      });
    });
  });
};