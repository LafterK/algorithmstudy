/**
 * @param {number[]} progresses
 * @param {number[]} speeds
 */
function solution(progresses, speeds) {
  // 주어진 문제에서 Task가 FIFO 특성을 가지고 있다.
  const queue = progresses.map((p, i) => Math.ceil((100 - p) / speeds[i]));
  const deploy = [];
  let lastMax = queue[0];
  let done = 0; // Done-Task counter: 작업이 완료되어 bulk 배포가능 상태인 Task의 갯수
  while (queue.length > 0) {
    const current = queue.shift();
    if (lastMax < current) {
      // 지역 최대값을 만날경우, 이전의 Task들은 배포 될 수 있다.
      deploy.push(done);
      // Done-Task counter를 초기화 한다.
      lastMax = current;
      done = 0;
    }
    // lastMax가 개발완료되는 동안 current 역시 개발이 끝났으므로 Done-Task counter를 증가시킨다
    done++;
  }
  if (done > 0) {
    // 큐가 비었는데도 배포되지 못한게 있으면 배포.
    deploy.push(done);
  }
  return deploy;
}

// console.log(solution([93, 30, 55], [1, 30, 5]));
// console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]));
