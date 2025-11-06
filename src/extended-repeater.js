const { NotImplementedError } = require('../lib');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options) {
  let additionStr = '';
  if (options.addition === undefined) options.addition = '';
  if (!options.repeatTimes) options.repeatTimes = 1;
  if (!options.additionRepeatTimes) options.additionRepeatTimes = 1;
  if (!options.separator) options.separator = '+';
  if (!options.additionSeparator) options.additionSeparator = '|';
  additionStr = (String(options.addition) + options.additionSeparator)
    .repeat(options.additionRepeatTimes).slice(0, -(options.additionSeparator.length));
  return (String(str) + additionStr + options.separator)
    .repeat(options.repeatTimes).slice(0, -(options.separator.length));
}

module.exports = {
  repeater
};
