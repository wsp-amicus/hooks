const shell = require("shelljs");

const deploy = () => {
  shell.exec("../sshalert.sh");
  shell.exec("./script.sh");
  return "done";
};

process.on("message", message => {
  const result = deploy();
  process.send(result);
});
