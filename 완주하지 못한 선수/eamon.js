/**
 * 
 * @param {string[]} participant 
 * @param {string[]} completion 
 */
 const solution1 = (participant, completion) => {
    const map = new Map();

    for(let i = 0; i < participant.length; i++) {
        let a = participant[i], 
            b = completion[i];

        map.set(a, (map.get(a) || 0) + 1);
        map.set(b, (map.get(b) || 0) - 1);
    }

    for(let [k, v] of map) {
        if(v > 0) return k;
    }

    return null;
}
//맵으로 풀면 더 빠르네요~
// 최대 60.01ms




// 전에는 sort 로풀음 
 const solution2 = (participant, completion) => {
    participant.sort()
    completion.sort()
    while (participant.length) {
        let pp = participant.pop()
        if (pp !== completion.pop()) return pp
    }
}

// 최대 113.08ms