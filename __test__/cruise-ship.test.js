const CruiseShip = require("../src/cruise-ship");
const Port = require("../src/port");
const Itinerary = require("../src/itinerary");

describe("CruiseShip", () => {
  let liverpool;
  let stMartin;
  let itinerary;
  let cruiseShip;

  beforeEach(() => {
    liverpool = {
      addShip: jest.fn(),
      removeShip: jest.fn(),
      name: "Liverpool",
      ships: [],
    };
    stMartin = {
      addShip: jest.fn(),
      removeShip: jest.fn(),
      name: "St. Martin",
      ships: [],
    };

    itinerary = {
      ports: [liverpool, stMartin]
    };
  
    cruiseShip = new CruiseShip(itinerary);
  });

  it("can be instantiated", () => {
    expect(cruiseShip).toBeInstanceOf(Object);
  });

  it("define a starting point for the cuise", () => {
    expect(cruiseShip.currentPort).toEqual(liverpool);
  });

  it("gets added to port on instantiation", () => {
    expect(liverpool.addShip).toHaveBeenCalledWith(cruiseShip);
  });

  it("can set sail", () => {
    cruiseShip.setSail();
    expect(cruiseShip.currentPort).toBeFalsy();
    expect(cruiseShip.previousPort).toBe(liverpool);
    expect(liverpool.removeShip).toHaveBeenCalledWith(cruiseShip);
  });

  it("can't sail further than its itinerary", () => {
    cruiseShip.setSail();
    cruiseShip.dock();
    expect(() => cruiseShip.setSail()).toThrowError("End of itinerary reached");
  });

  it("define a port to dock at", () => {
    cruiseShip.setSail();
    cruiseShip.dock();
    expect(cruiseShip.currentPort).toBe(stMartin);
  });

  it("can dock at a different port", () => {
    cruiseShip.setSail();
    cruiseShip.dock();
    expect(cruiseShip.currentPort).toBe(stMartin);
    expect(stMartin.addShip).toHaveBeenCalledWith(cruiseShip);
  });
});
