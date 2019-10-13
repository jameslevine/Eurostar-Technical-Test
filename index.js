const express = require("express");
const data = require("./data.json");
const editCompleted = require("./src/controllers");

const app = express();

app.get("/api/todos", function(_req, res) {
  res.status(200).send(data);
});

app.get("/api/completed/:id/:completed", editCompleted);

app.use(express.static("public"));

app.listen(4000, function() {
  console.log(`🚄 Server running @ http://localhost:4000`);
});
