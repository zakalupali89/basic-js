const {NotImplementedError} = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let numberString = n.toString(10);
  while (numberString.length !== 1) {
    numberString = numberString.split('').reduce((acc, next) => acc + parseInt(next, 10), 0).toString(10);
    const withoutZero = numberString.match(/(\w+[^0+])(?:0+)$/)?.[1];
    numberString = withoutZero ? withoutZero : numberString;
  }
  return +numberString;
}

module.exports = {
  getSumOfDigits
};
