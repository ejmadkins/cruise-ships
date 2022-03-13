function Port(name) {
  this.name = name;
  this.ships = [];
}

Port.prototype.addShip = function (addShip) {
  return this.ships.push(addShip);
};

Port.prototype.removeShip = function (removeShip) {
  return this.ships.splice(this.ships.indexOf(removeShip), 1);
};

module.exports = Port;
