/**
 * 
 * @param {number} n 
 * @param {number[]} lost 
 * @param {number[]} reserve 
 */

 function solution(n, lost, reserve) {
    // 체육복을 잃어버렸으면서 여벌이 없는 경우
    
    lost.sort()
    reserve.sort()
    
    const realLost = lost.filter((element) => !reserve.includes(element));

    // 여벌이 있으면서 체육복을 잃어버리지 않은 경우
    let realReserve = reserve.filter((element) => !lost.includes(element));

    // 학생 수(n) - 잃어버린 학생이 여벌을 못받은 경우(realLost.filter)
    return (
        n -
        realLost.filter((lost) => {
            const lend = realReserve.find(
                // 잃어버린 사람의 1칸 주위에 빌릴 사람이 있는 경우
                (reverse) => Math.abs(reverse - lost) == 1,
            );

            // 빌려줄 수 있는 사람이 없으면 진짜 잃어버린 걸로 간주하고 lost를 return
            if (!lend) return lost;
            // 빌려 줬으면 reserve 배열에서 빌려준 사람 제외
            realReserve = realReserve.filter((reverse) => reverse !== lend);
        }).length
    );
}


