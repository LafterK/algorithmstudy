/**
 * 
 * @param {number[][]} jobs 
 * @returns 
 */
function solution(jobs) {
    var answer = 0;
    const initialLength = jobs.length
const stack = []
let i = 0;
let now = 0;

    jobs.sort((a,b)=> a[0] - b[0])
    while(i < jobs.length || stack.length > 0){
        if(i<initialLength && jobs[i][0] <= now){
            stack.push(jobs[i++])
            continue
        }   
        stack.sort((a,b)=>b[1] - a[1]) 

        if (stack.length > 0) {
            let job = stack.pop();
            now += job[1];
            answer += now - job[0];
        } else {
            now = jobs[i][0];
        }

    }
    return  Math.floor(answer / initialLength);;
}

const jobs =  [[0, 3], [1, 9], [2, 6]]

console.log(solution(jobs)) //9