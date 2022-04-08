/**
 *
 * @param {number} n
 * @param {number[]} info - length 10
 * @description 가장 큰 점수차이로 이기기 위해 필요한 과녁 점수
 * @returns
 */
function solution(n, info) {
  const [result, max] = dfs(n, info, 0, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 0);
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
  return apeach >= lion ? [-1] : result;
}

function dfs(n, info, round, result, max) {
  if (round === 10) {
    // Last loop, score zero
    result[round] += n;
    return [result, max];
  }
  result[round] = 0;
  const lose = dfs(n, info, round + 1, [...result], max);

  if (n < info[round] + 1) {
    // Not enough arrows
    return lose;
  }

  result[round] = info[round] + 1;
  const win = dfs(
    n - info[round] - 1,
    info,
    round + 1,
    [...result],
    info[round] > 0 ? max + 2 * (10 - round) : max + 10 - round
  );
  if (win[1] > lose[1]) {
    return win;
  }
  if (win[1] === lose[1]) {
    for (let i = 10; i >= 0; i--) {
      if (win[0][i] > lose[0][i]) {
        return win;
      }
      if (win[0][i] < lose[0][i]) {
        return lose;
      }
    }
  } else {
    return lose;
  }
}

const assert = require('assert');

assert.deepEqual(
  solution(5, [2, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0]),
  [0, 2, 2, 0, 1, 0, 0, 0, 0, 0, 0]
);
assert.deepEqual(solution(1, [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), [-1]);
assert.deepEqual(
  solution(9, [0, 0, 1, 2, 0, 1, 1, 1, 1, 1, 1]),
  [1, 1, 2, 0, 1, 2, 2, 0, 0, 0, 0]
);
assert.deepEqual(
  solution(10, [0, 0, 0, 0, 0, 0, 0, 0, 3, 4, 3]),
  [1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 2]
);
