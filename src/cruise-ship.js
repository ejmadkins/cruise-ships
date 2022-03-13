// I want a ship to have a starting port.
function CruiseShip(itinerary) {
  this.itinerary = itinerary;
  this.currentPort = itinerary.ports[0];
  this.previousPort = null;
  this.currentPort.addShip(this);
}

CruiseShip.prototype.setSail = function () {
  const itinerary = this.itinerary;
  const currentPortIndex = itinerary.ports.indexOf(this.currentPort);

  if (currentPortIndex === itinerary.ports.length - 1) {
    throw new Error("End of itinerary reached");
  }

  this.previousPort = this.currentPort;
  this.currentPort = null;
  this.previousPort.removeShip(this);
};

CruiseShip.prototype.dock = function () {
  this.currentPort =
    this.itinerary.ports[this.itinerary.ports.indexOf(this.previousPort) + 1];
  this.currentPort.addShip(this);
};

module.exports = CruiseShip;
