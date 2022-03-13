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

  it("gets added to port on instantiation", () => {
    const liverpool = new Port("Liverpool");
    const itinerary = new Itinerary([liverpool]);
    const cruiseShip = new CruiseShip(itinerary);
    expect(cruiseShip.currentPort.ships).toEqual([cruiseShip]);
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
    expect(liverpool.ships).not.toContain(cruiseShip);
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
  it("define a port to dock at", () => {
    const liverpool = new Port("Liverpool");
    const stMartin = new Port("St. Martin");
    const itinerary = new Itinerary([liverpool, stMartin]);
    const cruiseShip = new CruiseShip(itinerary);

    cruiseShip.setSail();
    cruiseShip.dock();

    expect(cruiseShip.currentPort).toBe(stMartin);
  });

  it("can dock at a different port", () => {
    const liverpool = new Port("Liverpool");
    const stMartin = new Port("St. Martin");
    const itinerary = new Itinerary([liverpool, stMartin]);
    const cruiseShip = new CruiseShip(itinerary);

    cruiseShip.setSail();
    cruiseShip.dock();

    expect(cruiseShip.currentPort).toBe(stMartin);
    expect(stMartin.ships).toContain(cruiseShip);
  });
});
