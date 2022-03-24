/**
 * 
 * @param {string} begin 
 * @param {string} target 
 * @param {string[]} words 
 * @returns 
 */
 function solution(begin, target, words) {
    
    function wordDiff (word1, word2){
     return word1.split("").reduce((acc,cur,idx)=> {
    if(cur === word2[idx]) return acc = acc 
        return acc = acc + 1
     },0)
    }
        console.log(words.filter((v)=> wordDiff(v,"hit") === 1))
    
        let answer = 0;
         function dfs (words, word,count = 0){
       
            if(word === target) {
                if(answer !== 0) {
                    answer = Math.min(count, answer)
                return 
                }
            answer = count
                return 
            }
            count++
        
            const filterWords = words.filter((v)=> wordDiff(v,word) === 1)
            if(!filterWords) return 
            for (const cur of filterWords){
                const idx = words.findIndex((v)=> v === cur)
                words = [ ...words.slice(0,idx), ...words.slice(idx+1) ]
                dfs(words,cur, count)
                words = [ ...words.slice(0,idx), cur ,...words.slice(idx+1) ]
            }
         }
        
        dfs(words,begin)
        
        return answer;
    
    }
    