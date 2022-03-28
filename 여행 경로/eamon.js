/**
 * 
 * @param {string[][]} tickets 
 * @returns 
 */
function solution(tickets) {
    var answer = [];
    function dfs (start,tickets,ans=[]) {
        const newAns = [ ...ans , start ]
        if(tickets.length === 0){
            answer.push(newAns)
        }else{
            const filterTicket = tickets.filter((v) => v[0] === start)
        for(const ticket of filterTicket){
            const copiedTikets = tickets.filter((v) => v !== ticket)
            dfs(ticket[1],copiedTikets,newAns)
        }
        }
    
    }
    dfs("ICN",tickets)
    return answer.sort()[0];
}

const tickets = [["ICN", "SFO"], ["ICN", "ATL"], ["SFO", "ATL"], ["ATL", "ICN"], ["ATL","SFO"]]

console.log(solution(tickets))