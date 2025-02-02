/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let curNumber = 0;

  for (let i = 0; i < n.toString().length; i++) {
    const arr = n.toString().split('');
    arr.splice(i, 1);
    if (arr.join('') > curNumber) {
      curNumber = arr.join('');
    }
  }
  return +curNumber;
}

module.exports = deleteDigit;
