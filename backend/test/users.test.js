import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import { describe } from 'mocha';

const TEST_URL = new URL(process.env.TEST_URL || 'http://localhost:8000').toString();

chai.use(chaiHttp);

const user = {};

describe('Users', () => {
  describe('Signup', () => {
    it('should return 201 and the JWT token', (done) => {
      chai
        .request(TEST_URL)
        .post('api/signup')
        .send({
          username: 'test_user',
          password: 'test_password',
        })
        .end((err, res) => {
          expect(res).to.have.status(201);
          expect(res).body.to.be.an('object');
          done();
        });
    });
  });
  describe('Login', () => {

  });
  describe('GET /users', () => {

  });
  describe('GET user profile /me', () => {

  });
  describe('POST /users', () => {

  });
  describe('PUT /users', () => {

  });
  describe('DELETE /users', () => {

  });
});
