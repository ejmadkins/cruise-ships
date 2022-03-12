// I want a ship to have a starting port.
function CruiseShip(port) {
  console.log(port.name);
  this.port = port.name;
}

CruiseShip.prototype.setSail = function () {
  this.port = null;
};

module.exports = CruiseShip;
