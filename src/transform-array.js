const {NotImplementedError} = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  const resultArr = [];
  arr.forEach((item, i, array) => {
    if (item === '--double-next' && array[i + 1] !== undefined) {
      resultArr.push(array[i + 1]);
    } else if (item === '--double-prev' && i !== 0 && typeof array[i - 1] === 'number') {
      resultArr.push(array[i - 1]);
    } else if (item === '--discard-next' && array[i + 1] !== undefined) {
      array.splice(i + 1, 1);
    } else if (item === '--discard-prev' && i !== 0 && typeof array[i - 1] === 'number') {
      resultArr.splice(-1, 1);
    } else if (item !== '--double-next' && item !== '--double-prev' && item !== '--discard-next' && item !== '--discard-prev') {
      resultArr.push(item);
    }
  })
  return resultArr;
}

module.exports = {
  transform
};
