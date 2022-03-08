/**
 * 
 * @param {number[]} progresses 
 * @param {number[]} speeds 
 */

 function solution(progresses, speeds) {
    const days = progresses.map((v, i)=> Math.ceil((100 - v) / speeds[i]))
    const res = []
    let i = 0
    let j = 1
    let num = 1 

        
     while(j<days.length){
          
         if(days[i]>= days[j]){
             j++
             num++
         }else{
         i = j
         j++
         res.push(num)
         num = 1
         }

     }   
         res.push(num)
    return res
    }