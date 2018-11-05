const express = require("express");
const shell = require("shelljs");
const { fork } = require("child_process");
const app = express();
const port = 6789;

app.get("/", dowork);

async function dowork(req, res) {
  const compute = fork(() => {
    shell.exec("../sshalert.sh");
    shell.exec("./script.sh");
  });
  compute.send("start");
  res.send("doing");
}

app.listen(port, () => console.log(`app listening on port ${port}!`));
