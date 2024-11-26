import express from 'express';
import 'dotenv/config';
var hostname = process.env.HOSTNAME;
var port = process.env.PORT;
function validateEnvVariable(variable, variableName) {
  if (variable === undefined) {
    console.error("".concat(variableName, " is undefined."));
    process.exit(1);
    // Sair do processo com código de erro 1 
  }
  return variable;
}
var validatedHostname = validateEnvVariable(hostname, "HOSTNAME");
var validatedPort = validateEnvVariable(port, "PORT");
if (isNaN(Number(validatedPort))) {
  console.error("PORT is not a valid number: \"".concat(validatedPort, "\""));
  process.exit(1);
  // Sair do processo com código de erro 1
}
var app = express();
app.get("/", function (req, res) {
  res.send("Hello World!");
});
app.listen(Number(validatedPort), validatedHostname, function () {
  console.log("Server running at http://".concat(hostname, ":").concat(port, "/"));
});