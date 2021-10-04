const { buildUrl } = require("./infra.js");

describe("Infra Suite", () => {
  it("should build url", () => {
    const input = "Minsk";
    const apiKey = "API";
    const result =
      "https://api.openweathermap.org/data/2.5/weather?q=Minsk&appid=API&units=metric";

    expect(buildUrl(input, apiKey)).toBe(result);
  });
});
