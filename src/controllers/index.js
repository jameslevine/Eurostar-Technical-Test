const fs = require("fs");

const parseBoolean = str => {
  return str === "true" ? true : false;
};

const editCompleted = (req, res) => {
  const readData = fs.readFileSync(__dirname + "/../../data.json");
  const parsedData = JSON.parse(readData);
  parsedData.map(x => {
    if (x.id === parseInt(req.params.id)) {
      x.completed = parseBoolean(req.params.completed);
    }
  });
  let editedReadData = JSON.stringify(parsedData);
  fs.writeFileSync(__dirname + "/../../data.json", editedReadData);
  res.status(200);
  res.end();
};

module.exports = editCompleted;
