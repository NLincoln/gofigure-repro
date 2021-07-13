const gofigure1 = require("gofigure1");
const gofigure2 = require("gofigure2");
const path = require("path");

const config1 = gofigure1({
  locations: [path.join(__dirname, "configs")],
  environment: "cypress",
}).loadSync();

const config2 = gofigure2({
  locations: [path.join(__dirname, "configs")],
  environment: "cypress",
}).loadSync();

console.log("gofigure1:", config1);
console.log("gofigure2:", config2);
