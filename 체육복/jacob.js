/**
 *
 * @param {number} n
 * @param {number[]} lost
 * @param {number[]} reserve
 * @returns
 */
function solution(n, lost, reserve) {
  // lost 순회
  // reserve 중에서 자신과 같거나, 자신에게 옷을 빌려줄수 잇는 사람이 있는지 검사

  lost.sort();
  reserve.sort();

  const realLost = lost
    .filter((l) => reserve.findIndex((r) => r === l) < 0)
    .map((l) => ({ num: l, hasClothes: false }));
  const realReservers = reserve
    .filter((r) => lost.findIndex((l) => l === r) < 0)
    .map((r) => ({ num: r, hasRemainingClothes: true }));

  let countOfAbsent = realLost.length;
  for (const i in realReservers) {
    for (const j in realLost) {
      if (
        Math.abs(realLost[j].num - realReservers[i].num) === 1 &&
        realReservers[i].hasRemainingClothes &&
        !realLost[j].hasClothes
      ) {
        realReservers[i].hasRemainingClothes = false;
        realLost[j].hasClothes = true;
        countOfAbsent--;
        break;
      }
    }
  }

  return n - countOfAbsent;
}

console.log(solution(5, [2, 4], [1, 3, 5]));
console.log(solution(5, [1, 2, 4], [2, 4, 5])); // 4
console.log(solution(5, [1, 2, 4], [2, 3, 4, 5])); // 4
