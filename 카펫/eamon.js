function solution(brown, yellow) {
    var answer = [];
    let n = 0
    let m =  ( 4 + brown ) / 2  - n         
    while(m>0){
        if((m - 2) * (n - 2) === yellow){
            break
        }else{
            n++
            m = m - 1
        }
    }
    return [m,n];
}