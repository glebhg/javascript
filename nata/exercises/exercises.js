/**
 * Function checks if a "str" supplied is a palindrome
 * @param {string} str String to verify
 * @returns {boolean} True if "str" is a palindrome
 */
export function isPalindrome(str) {
  if (str) {
    return str === str.split("").reverse().join("");
  } else {
    return false;
  }
}

/**
 * Returns maximum number from a "arrayOfNumbers" array
 * @param {Array<number>} arrayOfNumbers
 * @returns {number} Maximum number from array
 */
export function maxNumber(arrayOfNumbers) {
  return Math.max.apply(null, arrayOfNumbers);
}

/**
 * Returns reverted string
 * (e.g. if "str" is "Hello" the function returns "olleH").
 * @param {string} str String to revert
 * @returns {string} Reverted string
 */
export function reverse(str) {
  if (str) {
    return (str = str.split("").reverse().join(""));
  } else {
    return (str = "");
  }
}
