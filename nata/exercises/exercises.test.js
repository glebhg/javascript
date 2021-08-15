const { isPalindrome, maxNumber, reverse } = require("./exercises.js");

describe("Palindrome Suite", function () {
  it("should return true for word 'kazak'", function () {
    expect(isPalindrome("kazak")).toBe(true);
  });

  it("should return false for word 'vasya'", function () {
    expect(isPalindrome("vasya")).toBe(false);
  });

  it("should return false for empty word", function () {
    expect(isPalindrome("")).toBe(false);
  });

  it("should return false for null and undefined", function () {
    expect(isPalindrome(null)).toBe(false);
    expect(isPalindrome(undefined)).toBe(false);
  });
});

describe("Max Number Suite", function () {
  it("should return 5 from an array [1, 2, 5, 4, 3]", function () {
    expect(maxNumber([1, 2, 5, 4, 3])).toBe(5);
  });

  it("should return 5 from an array [-1, 2, 5, -4, 3]", function () {
    expect(maxNumber([-1, 2, 5, -4, 3])).toBe(5);
  });

  it("should return 5 from an array [-1, 2, 5, -4, 3]", function () {
    expect(maxNumber([-1, 2, 5, -4, 3])).toBe(5);
  });
});

describe("Reverse Suite", function () {
  it("should return 'kazak' for word 'kazak'", function () {
    expect(reverse("kazak")).toBe("kazak");
  });

  it("should return olleH for word 'Hello'", function () {
    expect(reverse("Hello")).toBe("olleH");
  });

  it("should return empty string for empty input", function () {
    expect().toBe("");
  });

  it("should return empty string for null and undefined", function () {
    expect(reverse(null)).toBe("");
    expect(reverse(undefined)).toBe("");
  });
});
