const express = require("express");
const { fork } = require("child_process");
const app = express();
const port = 6789;

app.get("/", dowork);

async function dowork(req, res) {
  const compute = fork("run.js");
  compute.send("start");

  compute.on("message", result => {
    res.end(`deploy result: ${result}`);
  });
  res.send("doing");
}

app.listen(port, () => console.log(`app listening on port ${port}!`));
