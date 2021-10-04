const { Country, Weather, City } = require("./domain.js");

describe("Weather Suite", () => {
  it("should create City object", () => {
    const country = new Country("Belarus", "BY");
    const weather = new Weather("+25", "icon", "Sunny");
    const city = new City("Minsk", country, weather);
    expect(city.country.name).toBe("Belarus");
  });
});
