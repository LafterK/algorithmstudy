/**
 * @param {int} brown
 * @param {int} yellow
 */
function solution(brown, yellow) {
  brownEdge = brown - 4;
  for (let colNum = 1; colNum <= yellow; colNum++) {
    if (yellow % colNum !== 0) {
      continue;
    }
    const rowNum = yellow / colNum;
    if (rowNum > Math.sqrt(yellow)) {
      continue;
    }
    if (2 * colNum + 2 * rowNum === brownEdge) {
      return [colNum + 2, rowNum + 2];
    }
  }
  return [];
}
