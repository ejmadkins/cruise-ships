const CruiseShip = require("../src/cruise-ship");

describe("starting point", () => {
  const cruiseShip = new CruiseShip("Manchester");

  it("can be instantiated", () => {
    expect(cruiseShip).toBeInstanceOf(Object);
  });

  it("define a starting point for the cuise", () => {
    expect(cruiseShip.start).toBe("Manchester");
  });
});
