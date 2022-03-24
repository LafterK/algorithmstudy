/**
 * 
 * @param {number} n 
 * @param {number[][]} computers 
 * @returns number 
 */
function solution(n, computers) { 
// 최대 네트워크 개수 n 개 

// array [-1 -1 2 ]
var answer = 0;
const visited = new Array(n).fill(0)

// 최소 네트워크 개수 1 개 

// 3 에서 -> 2 

function dfs(i = 0){
if(visited[i]){
    
return 
}
visited[i] = 1
for(let index = 0; index< computers.length; index++ ){
    if(computers[i][index] === 1){
        dfs(index);
    }
}
}

for ( const idx in computers){
    if(!visited[idx]){
        dfs(idx);
        answer+=1;
    }
}
    return answer
}