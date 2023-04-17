const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const repetition = [...str.matchAll(/(?=(.))\1{1,}/g)];
  return repetition.map(item=> item[0].length === 1 ? `${item[1]}` : `${item[0].length}${item[1]}`).join('')
}

module.exports = {
  encodeLine
};
