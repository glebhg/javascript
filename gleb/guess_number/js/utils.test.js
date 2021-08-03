const { isEven } = require("./utils.js");

it("should be True if a number is 10", function () {
  expect(isEven(10)).toBe(true);
});

it("should be False if a number is 11", function () {
  expect(isEven(11)).toBe(false);
});
