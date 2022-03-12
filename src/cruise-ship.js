// I want a ship to have a starting port.
function CruiseShip(start) {
  this.start = start;
}

const manchesterCruise = new CruiseShip("Manchester");
console.log(manchesterCruise.start);

module.exports = CruiseShip;
