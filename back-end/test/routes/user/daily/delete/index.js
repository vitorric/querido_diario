const { createOneDaily } = require('../../../../factory/daily');

module.exports = async (expect, request, app) => {

  describe('File /routes/user/daily/delete/:dailyId', () => {

    describe('Service - /DELETE daily.deleteDailyById', () => {
      it('should be Error: without token', (done) => {
        request(app)
          .delete('/api/user/daily/delete/idfake')
          .expect(401)
          .end((err) => {
            if (err) return done(err);
            done();
          });
      });

      it('should be Error: dailyId is not ObjectId', (done) => {
        request(app)
          .delete('/api/user/daily/delete/123')
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
            .delete(`/api/user/daily/delete/${result._id}`)
            .set('Authorization', global.tokenUser)
            .expect(200)
            .end((err, res) => {
              if (err) return done(err);
              expect(res.body.success).to.be.true;
              expect(res.body.payload).to.be.true;

              done();
            });
        });
      });
    });
  });
};