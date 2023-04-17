const {NotImplementedError} = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const result = []
  for (let i = 0; i < matrix.length; i++) {
    let mines = 0;
    const subResult = [];
    for (let j = 0; j < matrix[i].length; j++) {
      const leftTop = matrix?.[i - 1]?.[j - 1] ? 1 : 0;
      const top = matrix?.[i - 1]?.[j] ? 1 : 0;
      const rightTop = matrix?.[i - 1]?.[j + 1] ? 1 : 0;

      const left = matrix?.[i]?.[j - 1] ? 1 : 0;
      const right = matrix?.[i]?.[j + 1] ? 1 : 0;

      const leftBottom = matrix?.[i + 1]?.[j - 1] ? 1 : 0;
      const bottom = matrix?.[i + 1]?.[j] ? 1 : 0;
      const rightBottom = matrix?.[i + 1]?.[j + 1] ? 1 : 0;

      mines = leftTop + top + rightTop + left + right + leftBottom + bottom + rightBottom;
      subResult.push(mines);
    }
    result.push(subResult);
  }
  return result;
}

module.exports = {
  minesweeper
};
