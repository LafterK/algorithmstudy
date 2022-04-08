/**
 *
 * @param {number[]} numbers
 * @returns {string}
 */
function solution(numbers) {
  const max = numbers
    .sort((a, b) => {
      const numericA = a.toString();
      const numericB = b.toString();
      return parseInt(numericB + numericA) - parseInt(numericA + numericB);
    })
    .join('');
  if (max[0] === '0') {
    return '0';
  }
  return max;
}

// console.log(solution([6, 10, 2]));
// console.log(solution([3, 30, 34, 5, 9]));
// console.log(solution([433, 4332]));
// console.log(solution([433, 4338]));
console.log(solution([0, 0, 0]));

// 4332;
// 433;

// 0,
// 104
//104
//1
// 4338;
// 433;

// 4338433;
// 4334338;

// 4332433;
// 4334332;
