/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const playingField = [];
  const numCols = matrix.length + 1;
  const numRows = matrix[0].length + 1;

  for (let i = 0; i < numCols; i++) {
    playingField.push(new Array(numRows).fill(0));
  }

  for (let i = 1; i < numCols; i++) {
    for (let j = 1; j < numRows; j++) {
      if (matrix[i - 1][j - 1] === true) {
        playingField[i - 1][j - 1] += 1;
        playingField[i - 1][j] += 1;
        playingField[i - 1][j + 1] += 1;
        playingField[i][j - 1] += 1;
        playingField[i][j + 1] += 1;
        playingField[i + 1][j - 1] += 1;
        playingField[i + 1][j] += 1;
        playingField[i + 1][j + 1] += 1;
      }
    }
  }

  playingField.map((elem) => elem.splice(0, 1));
  playingField.splice(0, 1);
  return playingField;
}

module.exports = minesweeper;
