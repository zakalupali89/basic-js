const {NotImplementedError} = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let [minChars, maxChars] = [s1.split(''), s2.split('')].sort((a, b) => a.length - b.length);
  let result = 0;
  minChars.forEach((item, i) => {
    const index = maxChars.indexOf(item);
    if (index !== -1) {
      result++;
      maxChars.splice(index,1);
    }
  })
  return result;
}

module.exports = {
  getCommonCharacterCount
};
