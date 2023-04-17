const {NotImplementedError} = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const res = {}
  return names.map(item => {
    if (res[item] !== undefined) {
      res[item] += 1;
      const newName = `${item}(${res[item]})`
      res[newName] = 0;
      return newName;
    } else {
      res[item] = 0;
      return item;
    }
  })
}

module.exports = {
  renameFiles
};
