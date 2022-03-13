// I want a ship to have a starting port.
function CruiseShip(start) {
  this.start = start;
  this.destinationPort = "";
}

CruiseShip.prototype.setSail = function () {
  this.start = null;
};

CruiseShip.prototype.dock = function (destinationPort) {
  this.destinationPort = destinationPort;
};

const cruise = new CruiseShip("Liverpool");
console.log(cruise.start);
cruise.dock("St. Martin");
console.log(cruise.destinationPort);

module.exports = CruiseShip;
