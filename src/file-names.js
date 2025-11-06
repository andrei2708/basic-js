const { NotImplementedError } = require('../lib');

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
  let arr = [];
  let names2 = {};
  names.forEach(elem => {
    if(!names2.hasOwnProperty(elem)) {
      names2[elem] = 0
    } else {
      names2[elem]++
    }
    let newFile = elem + (names2[elem] === 0 ? "" : `(${names2[elem]})`)
    arr.push(newFile)
    names2[newFile] = 0
  })
  return arr;
}

module.exports = {
  renameFiles
};
