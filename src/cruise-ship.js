const Port = require("./port");

// I want a ship to have a starting port.
function CruiseShip(port) {
  this.port = port;
  this.destinationPort = "";
}

CruiseShip.prototype.setSail = function () {
  this.port = null;
};

CruiseShip.prototype.dock = function (destinationPort) {
  this.destinationPort = destinationPort;
};

// const port = new Port("Liverpool");
// const destinationPort = new Port("St. Martin");
// const cruise = new CruiseShip(port);
// console.log(cruise.port);
// cruise.dock(destinationPort);
// console.log(cruise.destinationPort);

module.exports = CruiseShip;
