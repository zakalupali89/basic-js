const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const copyArr = [...arr];
  const positionsOnes = [];

  let i = -1;
  while ((i = arr.indexOf(-1, i+1)) > -1) {
    positionsOnes.push(i);
  }
  const rightPos = [...positionsOnes];
  while(rightPos.length){
    copyArr.splice(rightPos.pop(), 1);
  }

  copyArr.sort((a,b)=>a-b);
  while(positionsOnes.length) {
    copyArr.splice(positionsOnes.shift(), 0, -1);
  }
  return copyArr;
}

module.exports = {
  sortByHeight
};
