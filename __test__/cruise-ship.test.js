const CruiseShip = require("../src/cruise-ship");

describe("starting point", () => {
  it("can be instantiated", () => {
    const cruiseShip = new CruiseShip("Manchester");
    expect(cruiseShip).toBeInstanceOf(Object);
  });

  it("define a starting point for the cuise", () => {
    const cruiseShip = new CruiseShip("Manchester");
    expect(cruiseShip.start).toBe("Manchester");
  });

  it("can set sail", () => {
    const cruiseShip = new CruiseShip("Manchester");
    cruiseShip.setSail();
    expect(cruiseShip.start).toBeFalsy();
  });
});
