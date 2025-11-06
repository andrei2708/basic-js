const { NotImplementedError } = require('../lib');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates depth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let count = 1;
    let newArr = arr.filter(x => Array.isArray(x));
    if (newArr.length > 0) {
      newArr = newArr.flat();
      count += this.calculateDepth(newArr);
    }
    return count;
  }
}

module.exports = {
  depthCalculator: new DepthCalculator(),
};
