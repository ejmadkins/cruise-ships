// I want a ship to have a starting port.
function CruiseShip(start) {
  this.start = start;
}

CruiseShip.prototype.setSail = function () {
  this.start = null;
};

const manchesterCruise = new CruiseShip("Manchester");
console.log(manchesterCruise.start);
console.log((manchesterCruise.setSail = "london"));

module.exports = CruiseShip;
