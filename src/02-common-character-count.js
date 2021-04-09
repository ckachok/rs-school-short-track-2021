/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const arrFirstStr = s1.split('');
  const arrSecondStr = s2.split('');
  let numberMatches = 0;
  let matchIndex;

  for (let i = 0; i < arrFirstStr.length; i++) {
    matchIndex = arrSecondStr.indexOf(arrFirstStr[i]);
    if (matchIndex !== -1) {
      arrSecondStr.splice(matchIndex, 1);
      arrFirstStr.splice(i, 1);
      numberMatches++;
      i = -1;
    }
  }
  return numberMatches;
}

module.exports = getCommonCharacterCount;
