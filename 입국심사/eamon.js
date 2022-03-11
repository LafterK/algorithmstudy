
/**
 * 
 * @param {number} n 
 * @param {number[]} times 
 * @returns number
 */

 function solution(n, times) {
    var answer = 0;
// 이분 탐색
// 최대 값이 '가장 오래 걸리는 심사관 * 승객 수'


times.sort((a, b)=> a - b)

let left = 0
let right = times[times.length-1] * n

// 이분 탐색
while (left<=right){
    let mid = Math.floor((left+right) / 2);
    const max = times.reduce((acc,prev)=> acc += Math.floor(mid / prev), 0)

    if(max >= n){
        //초과해서 가능할 경우
        answer = mid;
        right = mid - 1;
    }else{
        //심사가 완료가 불가능한 경우
        left = mid + 1;
    }
}
return answer;
}