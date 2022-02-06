import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import { describe } from 'mocha';
import server from '../src/index.js';

chai.use(chaiHttp);

const user = { username: 'test_user', password: 'test_password' };

// TODO: refactor "server" and rename it "app" in index.js file
const app = server;

describe('Users', () => {
  before(() => {
    chai
      .request(app.server)
      .post('/api/login')
      .send({
        username: 'toto',
        password: 'toto'
      })
      .end((err, res) => user.token = res.body.token);
  });
  describe('Signup', () => {
    it('should return 201 and the JWT token', (done) => {
      chai
        .request(app.server)
        .post('/api/signup')
        .send({
          username: user.username,
          password: user.password
        })
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(201);
          expect(res.body).to.be.an('object');
          expect(res.body).have.property('token');
          done();
        });
    });
  });
  describe('Login', () => {
    it('should return 200 and the JWT token', (done) => {
      chai
        .request(app.server)
        .post('/api/login')
        .send({
          username: user.username,
          password: user.password
        })
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          expect(res.body).to.be.an('object');
          expect(res.body).have.property('token');
          done();
        });
    });
  });
  describe('GET /users', () => {
    it('should return 200 and the list of users with basic information', (done) => {
      chai
        .request(app.server)
        .get('/api/users')
        .set('Authorization', `Bearer ${user.token}`)
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          expect(res.body).to.be.an('array');
          expect(res.body[0]).have.property('username');
          expect(res.body[0]).have.property('userID');
          expect(res.body[0]).not.have.property('password');

          done();
        });
    });
  });
  describe('GET user profile /me', () => {
    it('should return 200 and the JWT token', (done) => {
      chai
        .request(app.server)
        .get('/api/me')
        .set('Authorization', `Bearer ${user.token}`)
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          expect(res.body).to.be.an('object');
          expect(res.body).have.property('username');
          expect(res.body).have.property('userID');
          expect(res.body).not.have.property('password');
          done();
        });
    });
  });
  describe('PUT /users', () => {
    // This route won't be tested yet as you should only be able to update yourself and not other people.
  });
  describe('DELETE /users', () => {
    // This route won't be tested yet as you should only be able to delete yourself.
  });
});
