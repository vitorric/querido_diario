const { createOneDaily } = require('../../../../factory/daily');

module.exports = async (expect, request, app) => {

  describe('File /routes/user/daily/get/:dailyId', () => {

    describe('Service - /GET daily.getDailyById', () => {
      it('should be Error: without token', (done) => {
        request(app)
          .get('/api/user/daily/get/idfake')
          .expect(401)
          .end((err) => {
            if (err) return done(err);
            done();
          });
      });

      it('should be Error: dailyId is not ObjectId', (done) => {
        request(app)
          .get('/api/user/daily/get/123')
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
        createOneDaily((result) => {
          request(app)
            .get(`/api/user/daily/get/${result._id}`)
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
  });
};