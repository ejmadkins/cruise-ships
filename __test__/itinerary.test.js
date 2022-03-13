const Itinerary = require("../src/itinerary");

describe("Itinerary", () => {
  let itinerary;

  beforeEach(() => {
    liverpool = jest.fn();
    stMartin = jest.fn();
    itinerary = new Itinerary([liverpool, stMartin]);
  });

  it("can be instantiated", () => {
    expect(itinerary).toBeInstanceOf(Object);
  });

  it("has ports property", () => {
    expect(itinerary.hasOwnProperty("ports")).toBe(true);
  });
});
