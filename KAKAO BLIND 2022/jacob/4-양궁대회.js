/**
 *
 * @param {number} n
 * @param {number[]} info - length 10
 * @description 가장 큰 점수차이로 이기기 위해 필요한 과녁 점수
 * @returns
 */
function solution(n, info) {
  const result = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  while (n > 0) {
    let cur = 1; // 지금시점에서 한번에 투자할 화살 갯수
    let maxEfficient = -1;
    let position = -1;
    while (cur <= n) {
      const expectedGaps = info.map((arrowNum, i) => {
        if (arrowNum === 0) {
          return 10 - i;
        }
        if (arrowNum > 0 && arrowNum < cur) {
          return 2 * (10 - i);
        }
        // arrowNum < 0 || arrowNum >= cur
        // 이 점수칸에서는 점수를 딸 수 없음
        return 0;
      });

      const maxGap = most(expectedGaps, (a, b) => a - b);
      const efficient = maxGap.value / cur;
      if (maxEfficient >= efficient) {
        break;
      }
      maxEfficient = efficient;
      position = maxGap.index;
      cur++;
    }

    const toFire = cur - 1; // 이번에 날릴 화살 수
    result[position] += toFire;
    info[position] = -1; // 이미 쏜 곳 체크
    n -= toFire;
  }
  let apeach = 0;
  let lion = 0;
  for (let i = 0; i < info.length; i++) {
    if (info[i] === 0 && result[i] === 0) {
      continue;
    }
    if (info[i] > 0 && info[i] >= result[i]) {
      apeach += 10 - i;
    } else {
      lion += 10 - i;
    }
  }
  console.log(apeach, lion);
  return apeach >= lion ? [-1] : result;
}

/**
 * @template T
 * @callback Comparator<T>
 * @param {T} a
 * @param {T} b
 * @returns {number}
 */
/**
 * @template T
 * @param {Array.<T>} arr
 * @param {Comparator.<T>} compare
 * @returns {{index: number; value: T}}
 */
function most(arr, compare) {
  if (arr.length == 0) {
    throw new Error('Array is empty');
  }
  return arr.reduce(
    (prev, cur, i) =>
      compare(prev.value, cur) > 0 ? prev : { index: i, value: cur },
    {
      index: 0,
      value: arr[0],
    }
  );
}

// console.log(solution(5, [2, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0]));
// console.log(solution(1, [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]));
// console.log(solution(9, [0, 0, 1, 2, 0, 1, 1, 1, 1, 1, 1]));
console.log(solution(10, [0, 0, 0, 0, 0, 0, 0, 0, 3, 4, 3]));
console.log(solution(5, [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1]));

// n == 1,
// n == 2
// n == 3
