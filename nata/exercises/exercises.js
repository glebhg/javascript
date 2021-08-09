/**
 * Function checks if a "str" supplied is a palindrome
 * @param {string} str String to verify
 * @returns {boolean} True if "str" is a palindrome
 */
export function isPalindrome(str) {
  if (str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
      newString += str[i];
    }
    return newString === str;
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
  var max = arrayOfNumbers[0];
  for (var i = 1; i < arrayOfNumbers.length; i++) {
    if (arrayOfNumbers[i] > max) {
      max = arrayOfNumbers[i];
    }
  }
  return max;
}

/**
 * Returns reverted string
 * (e.g. if "str" is "Hello" the function returns "olleH").
 * @param {string} str String to revert
 * @returns {string} Reverted string
 */
export function reverse(str) {
  if (str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
      newString += str[i];
    }
    return newString;
  } else {
    return (str = "");
  }
}
