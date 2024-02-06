import chai, { expect } from "chai";
import chaiHttp from "chai-http";
import { describe } from "mocha";
import server from "../src/index.js";

chai.use(chaiHttp);

const user = { username: "test_user", password: "test_password" };

const app = server;

describe("Ingredients", () => {
  before(() => {
    chai
      .request(app.server)
      .post("/api/login")
      .send({
        username: user.username,
        password: user.password,
      })
      .end((err, res) => (user.token = res.body.token));
  });
  describe("GET /ingredients", () => {
    it("Should return 200 and list of ingredients", (done) => {
      chai
        .request(app.server)
        .get("/api/ingredients")
        .set("Authorization", `Bearer ${user.token}`)
        .end((err, res) => {
          console.log(res);
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          done();
        });
    });
  });
  describe("GET /ingredients/:id", () => {
    it("Should return 200 and the required ingredient", (done) => {
      chai
        .request(app.server)
        .get("/api/ingredient/1")
        .set("Authorization", `Bearer ${user.token}`)
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          done();
        });
    });
  });
});
