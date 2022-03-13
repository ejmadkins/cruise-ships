const Port = require("./port");
const Itinerary = require("./itinerary");

// I want a ship to have a starting port.
function CruiseShip(itinerary) {
  this.itinerary = itinerary;
  this.currentPort = itinerary.ports[0];
  this.previousPort = null;
}

CruiseShip.prototype.setSail = function () {
  const itinerary = this.itinerary;
  const currentPortIndex = itinerary.ports.indexOf(this.currentPort);

  if (currentPortIndex === itinerary.ports.length - 1) {
    throw new Error("End of itinerary reached");
  }

  this.previousPort = this.currentPort;
  this.currentPort = null;
};

CruiseShip.prototype.dock = function () {
  this.currentPort =
    this.itinerary.ports[this.itinerary.ports.indexOf(this.previousPort) + 1];
};

module.exports = CruiseShip;
