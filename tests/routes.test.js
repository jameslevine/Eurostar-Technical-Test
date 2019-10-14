const request = require("supertest");
const app = require("../index.js");

describe("GET /api/todos", function() {
  it("respond with json containing a list of all tasks", function(done) {
    request(app)
      .get("/api/todos")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });
});

describe("GET /api/completed/2/true", function() {
  it("respond with json containing a list of all tasks", function(done) {
    request(app)
      .get("/api/completed/2/true")
      .expect(200, done);
  });
});
