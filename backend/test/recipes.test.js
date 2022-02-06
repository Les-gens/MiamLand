import chai, { expect } from "chai";
import chaiHttp from "chai-http";
import { describe } from "mocha";
import server from "../src/index.js";

chai.use(chaiHttp);

const user = { username: "test_user", password: "test_password" };

const app = server;

describe("Recipes", () => {
  before(() => {
    chai
      .request(app.server)
      .post("/api/login")
      .send({
        username: "toto",
        password: "toto",
      })
      .end((err, res) => (user.token = res.body.token));
  });
  describe("GET /recipes", () => {
    it("Should return 200 and list of recipes", (done) => {
      chai
        .request(app.server)
        .get("/api/recipes")
        .set("Authorization", `Bearer ${user.token}`)
        .end((err, res) => {
          console.log(res);
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          done();
        });
    });
  });
  describe("GET /recipes/:id", () => {
    it("Should return 200 and the required recipe", (done) => {
      chai
        .request(app.server)
        .get("/api/recipe/1")
        .set("Authorization", `Bearer ${user.token}`)
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          done();
        });
    });
  });
});
