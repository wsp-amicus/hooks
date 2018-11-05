const express = require("express");
const shell = require("shelljs");
const app = express();
const port = 6789;

app.get("/", dowork);

async function dowork(req, res) {
  shell.exec("./script.sh");
  shell.exec("../sshalert.sh")
  res.send("Done");
}

app.listen(port, () => console.log(`app listening on port ${port}!`));
