const { createOneDaily } = require('../../../../factory/daily');

module.exports = async (expect, request, app) => {

  describe('File /routes/user/daily/update', () => {

    let daily = {};
    beforeEach(() => {
      daily = {
        dailyId: 'kkkkk',
        description: 'Atualizar Campos'
      };
    });


    describe('Service - /PUT daily.updateDailyById', () => {
      it('should be Error: without token', (done) => {
        request(app)
          .put('/api/user/daily/update')
          .expect(401)
          .end((err) => {
            if (err) return done(err);
            done();
          });
      });

      it('should be Error: no dailyId', (done) => {
        delete daily.dailyId;
        request(app)
          .put('/api/user/daily/update')
          .set('Authorization', global.tokenUser)
          .send(daily)
          .expect(200)
          .end((err, res) => {
            if (err) return done(err);
            expect(res.body.success).to.be.false;
            expect(res.body.payload).to.be.an('object')
              .that.has.all.keys('msg');
            done();
          });
      });

      it('should be Error: no description', (done) => {
        delete daily.description;
        request(app)
          .put('/api/user/daily/update')
          .set('Authorization', global.tokenUser)
          .send(daily)
          .expect(200)
          .end((err, res) => {
            if (err) return done(err);
            expect(res.body.success).to.be.false;
            expect(res.body.payload).to.be.an('object')
              .that.has.all.keys('msg');
            done();
          });
      });

      it('should be Error: dailyId is not ObjectId', (done) => {
        request(app)
          .put('/api/user/daily/update')
          .set('Authorization', global.tokenUser)
          .send(daily)
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
            .put('/api/user/daily/update')
            .set('Authorization', global.tokenUser)
            .send({
              ...daily,
              dailyId:result._id
            })
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