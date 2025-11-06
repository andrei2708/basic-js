const { NotImplementedError } = require('../lib');

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
  let arr = str.split('');
  let count = 1;
  let s = arr.splice(0, 1);
  let res = '';
  for (let i = 0; i < arr.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      res += (count === 1 ? '' : count) + s;
      count = 1;
      s = arr[i];
    }
  }
  return res + (count === 1 ? '' : count) + s;
}

module.exports = {
  encodeLine
};
