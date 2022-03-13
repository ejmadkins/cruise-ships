const CruiseShip = require("../src/cruise-ship");
const Port = require("../src/port");

describe("starting point", () => {
  const port = new Port("Liverpool");
  const cruiseShip = new CruiseShip(port);
  it("can be instantiated", () => {
    expect(cruiseShip).toBeInstanceOf(Object);
  });

  it("define a starting point for the cuise", () => {
    expect(cruiseShip.port).toBe("Liverpool");
  });

  it("can set sail", () => {
    cruiseShip.setSail();
    expect(cruiseShip.port).toBeFalsy();
  });

  describe("dock", () => {
    const startingPort = new Port("Liverpool");
    const destinationPort = new Port("St. Martin");
    const cruiseShip = new CruiseShip(startingPort);

    cruiseShip.dock(destinationPort);

    it("define a port to dock at", () => {
      expect(cruiseShip.destinationPort).toBe("St. Martin");
    });
  });
});
