/**
 *
 * @param {number[]} numbers
 * @param {number} target
 * @returns number
 */
function solution(numbers, target) {
  //이 정수들을 순서를 바꾸지 않고 적절히 더하거나 빼서 타겟 넘버

  // 방법의 수를 리턴
  // dfs
  let ans = 0;
  function dfs(idx = 0, sum = 0) {
    if (idx === numbers.length) {
      if (sum === target) ans++;
      return;
    }
    dfs(idx + 1, sum + numbers[idx]);
    dfs(idx + 1, sum - numbers[idx]);
  }
  dfs();
  return ans;
}
