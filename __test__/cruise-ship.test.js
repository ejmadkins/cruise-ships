const CruiseShip = require("../src/cruise-ship");
const Port = require("../src/port");

describe("starting point", () => {
  const port = new Port("Dover");
  const cruiseShip = new CruiseShip(port);
  it("can be instantiated", () => {
    expect(cruiseShip).toBeInstanceOf(Object);
  });

  it("define a starting point for the cuise", () => {
    expect(cruiseShip.port).toBe("Dover");
  });

  it("can set sail", () => {
    cruiseShip.setSail();
    expect(cruiseShip.port).toBeFalsy();
  });
});
