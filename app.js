const express = require("express");
const shell = require("shelljs");
const app = express();
const port = 6789;

app.get("/", dowork);

function dowork(req, res) {
  shell.exec("nohup ./script.sh &");
  shell.exec("../sshalert.sh")
  res.send("Done");
}

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
