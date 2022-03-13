const Itinerary = require("../src/itinerary");

describe("Itinerary", () => {
  let itinerary;

  beforeEach(() => {
    itinerary = new Itinerary(["Liverpool", "St. Martin"]);
  });

  it("can be instantiated", () => {
    expect(itinerary).toBeInstanceOf(Object);
  });

  it("has ports property", () => {
    expect(itinerary.hasOwnProperty("ports")).toBe(true);
  });
});
