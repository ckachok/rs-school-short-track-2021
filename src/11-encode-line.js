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
  const arrStr = str.split('');
  const strEncode = [];
  let count = 1;

  for (let i = 0; i < arrStr.length; i++) {
    if (arrStr[i] === arrStr[i + 1]) {
      count++;
    } else if (count === 1) {
      strEncode.push(`${arrStr[i]}`);
    } else {
      strEncode.push(`${count}${arrStr[i]}`);
      count = 1;
    }
  }
  return strEncode.join('');
}

module.exports = encodeLine;
