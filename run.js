const shell = require("shelljs");

const deploy = () => {
  shell.exec("sudo kill $(sudo lsof -t -i :5555);");
  shell.exec("../sshalert.sh");
  shell.exec("./script.sh");
  return "done";
};

process.on("message", message => {
  const result = deploy();
  process.send(result);
});
