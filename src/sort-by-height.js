const { NotImplementedError } = require('../lib');

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
  let arr2 = [];
  let i = 0;
  arr.forEach(item => {
    if (item === -1) {
      // console.log(arr2.push(-1))
      arr2.push(-1)
    } else {
      arr2.push(arr.filter(el => el !== -1).sort((a, b) => a - b)[i++]);
      // console.log(arr2.push(arr.sort((a, b) => a - b).filter(el => el !== -1)))
    }
  })
  // console.log(arr2);
  return arr2;
}

module.exports = {
  sortByHeight
};
