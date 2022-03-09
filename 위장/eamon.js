/**
 * 
 * @param {string[][]} clothes 
 * @returns 
 */

 function solution(clothes) {
    const res = clothes.reduce((acc,cur)=> {
    if(!acc[cur[1]]){
        acc[cur[1]] = 2
    }else{
        acc[cur[1]] += 1
    } 
        return acc
    }    , {})
      
    return Object.values(res).reduce((acc,cur)=> acc = cur * acc , 1) -1
    }