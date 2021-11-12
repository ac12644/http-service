const app = require('./index');
const should = require('chai').should();
const request = require('supertest');

describe('test.js', () => {
        describe('GET /helloworld', () => {
                it('responds with 200', (done) => {
                        request(app)
                        .get('/helloworld')
                        .expect(200)
                        .end((e, res) => {
                                should.not.exist(e);
                                done();
                            });
                    });
            });
    });