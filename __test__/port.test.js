const Port = require("../src/port");

describe("port", () => {
  let liverpool;

  beforeEach(() => {
    liverpool = new Port("Liverpool");
  });

  it("can be instantiated", () => {
    expect(liverpool).toBeInstanceOf(Object);
  });

  it("define a name for the port", () => {
    expect(liverpool.name).toBe("Liverpool");
  });

  it("addShip", () => {
    const cruiseShip = jest.fn();
    liverpool.addShip(cruiseShip);
    expect(liverpool.ships).toContain(cruiseShip);
  });

  it("removeShip", () => {
    const cruiseShipOne = jest.fn();
    const cruiseShipTwo = jest.fn();
    liverpool.addShip(cruiseShipOne);
    liverpool.addShip(cruiseShipTwo);
    liverpool.removeShip(cruiseShipTwo);
    expect(liverpool.ships).toEqual([cruiseShipOne]);
  });
});
