module.exports = async (expect, request, app) => {
  describe('File /routes/user/daily/list', () => {

    describe('Service - /POST daily.listDaily', () => {
      it('should be Error: without token', (done) => {
        request(app)
          .post('/api/user/daily/list')
          .expect(401)
          .end((err) => {
            if (err) return done(err);
            done();
          });
      });

      it('should be success', (done) => {
        request(app)
          .post('/api/user/daily/list')
          .send({
            page: 1,
            rowsPerPage: 10
          })
          .set('Authorization', global.tokenUser)
          .expect(200)
          .end((err, res) => {
            if (err) return done(err);
            expect(res.body.success).to.be.true;
            expect(res.body.payload).to.be.an('object')
              .that.has.all.keys('dailies', 'metadata');
            done();
          });
      });
    });
  });
};