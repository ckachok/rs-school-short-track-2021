function getCommonCharacterCount(s1, s2) {
  let arrFirstStr = s1.split('');
  let arrSecondStr = s2.split('');
  let numberMatches = 0;
  let matchIndex;

  for (let i = 0; i < arrFirstStr.length; i++) {
    matchIndex = arrSecondStr.indexOf(arrFirstStr[i]);
    if (matchIndex != -1) {
      arrSecondStr = arrSecondStr.splice(matchIndex, 1);
      arrFirstStr = arrFirstStr.splice(i, 1);
      i = -1;
      numberMatches++;
    }
  }
  return numberMatches;
}

console.log(getCommonCharacterCount('aabcc', 'adcaa'))
