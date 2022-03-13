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
