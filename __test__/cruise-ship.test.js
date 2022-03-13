const CruiseShip = require("../src/cruise-ship");
const Port = require("../src/port");
const Itinerary = require("../src/itinerary");

describe("starting point", () => {
  it("can be instantiated", () => {
    const liverpool = new Port("Liverpool");
    const itinerary = new Itinerary([liverpool]);
    const cruiseShip = new CruiseShip(itinerary);
    expect(cruiseShip).toBeInstanceOf(Object);
  });

  it("define a starting point for the cuise", () => {
    const liverpool = new Port("Liverpool");
    const itinerary = new Itinerary([liverpool]);
    const cruiseShip = new CruiseShip(itinerary);
    expect(cruiseShip.currentPort).toEqual(liverpool);
  });
});

describe("setSail", () => {
  it("can set sail", () => {
    const liverpool = new Port("Liverpool");
    const stMartin = new Port("St. Martin");
    const itinerary = new Itinerary([liverpool, stMartin]);
    const cruiseShip = new CruiseShip(itinerary);
    cruiseShip.setSail();
    expect(cruiseShip.currentPort).toBeFalsy();
    expect(cruiseShip.previousPort).toBe(liverpool);
  });

  it("can't sail further than its itinerary", () => {
    const liverpool = new Port("Liverpool");
    const stMartin = new Port("St. Martin");
    const itinerary = new Itinerary([liverpool, stMartin]);
    const cruiseShip = new CruiseShip(itinerary);

    cruiseShip.setSail();
    cruiseShip.dock();

    expect(() => cruiseShip.setSail()).toThrowError("End of itinerary reached");
  });
});

describe("dock", () => {
  const liverpool = new Port("Liverpool");
  const stMartin = new Port("St. Martin");
  const itinerary = new Itinerary([liverpool, stMartin]);
  const cruiseShip = new CruiseShip(itinerary);

  cruiseShip.setSail();
  cruiseShip.dock();

  it("define a port to dock at", () => {
    expect(cruiseShip.currentPort).toBe(stMartin);
  });
});
