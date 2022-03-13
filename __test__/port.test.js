const Port = require("../src/port");

describe("port", () => {
  it("can be instantiated", () => {
    const port = new Port("Dover");
    expect(port).toBeInstanceOf(Object);
  });

  it("define a name for the port", () => {
    const port = new Port("Dover");
    expect(port.name).toBe("Dover");
  });
});

describe("dockedShips", () => {
  it("addShip", () => {
    const port = new Port("Dover");
    const cruiseShip = {};
    port.addShip(cruiseShip);
    expect(port.ships).toContain(cruiseShip);
  });

  it("removeShip", () => {
    const port = new Port("Dover");
    const cruiseShipOne = {};
    const cruiseShipTwo = {};
    port.addShip(cruiseShipOne);
    port.addShip(cruiseShipTwo);
    port.removeShip(cruiseShipTwo);
    expect(port.ships).toEqual([cruiseShipOne]);
  });
});
