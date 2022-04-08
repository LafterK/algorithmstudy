// 정확도 테스트 밖에없으므로, n^2 가능
/**
 j
 * @param {number} n
 * @param {number} k
 * @returns
 */
function solution(n, k) {
  const numerics = n.toString(k).split('0');
  return numerics
    .filter((num) => num !== '')
    .reduce((prev, cur) => {
      if (isPrimeNumber(parseInt(cur, 10))) {
        return prev + 1;
      }
      return prev;
    }, 0);
}

/**
 * @param {number} num
 * @returns {bool}
 */
function isPrimeNumber(num) {
  if (num <= 1) {
    return false;
  }
  for (i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(solution(437674, 3));
console.log(solution(110011, 10));
