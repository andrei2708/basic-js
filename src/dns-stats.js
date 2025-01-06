const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const reversDNS = domains.map(elem => {
    return elem.split(".").reverse();
  });

  const result = {};

  for (let i = 0; i < reversDNS.length; i++) {
    let str = "";
    for (let j = 0; j < reversDNS[i].length; j++) {
      str += "." + reversDNS[i][j]
      if (str in result) {
        result[str] += 1; 
      } else {
        result[str] = 1;
      }
    }
  }
  return result;
}

module.exports = {
  getDNSStats
};
