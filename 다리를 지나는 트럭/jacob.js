/**
 *
 * @param {number} bridge_length
 * @param {number} weight
 * @param {number[]} truck_weights
 * @returns
 */
function solution(bridge_length, weight, truck_weights) {
  const q = queue(truck_weights);
  const onBridge = queue([...Array(bridge_length).keys()].map((_) => 0)); // 다리위를 무게가 0인 가상의 트럭으로 채움
  let timer = 0;
  let totalWeightOnBridge = 0; // 다리 위 트럭 무게 합
  while (!(q.isEmpty() && totalWeightOnBridge == 0)) {
    // 다리위 한 칸 앞으로 당겨서 자리 비워주기
    timer++;
    totalWeightOnBridge -= onBridge.dequeue();
    if (
      totalWeightOnBridge + q.front() <= weight &&
      onBridge.size() < bridge_length
    ) {
      // 다리위에 올라갈 수 있으면 (무게되고, 자리되면) 다리위에 트럭 올리기.
      // 대기열에서 삭제
      // 무게 합에서 합산
      const truckWeight = q.dequeue();
      onBridge.enqueue(truckWeight);
      totalWeightOnBridge += truckWeight;
    } else {
      if (onBridge.size() < bridge_length) {
        // 다리의 빈자리를 무게가 0인 가상의 트럭으로 채워줌
        onBridge.enqueue(0);
      }
    }
  }
  return timer;
}

/**
 * @param {number[]} arr
 */
function queue(arr) {
  const list = Array.isArray(arr) ? arr : [];
  let front = 0;
  const size = () => list.length - front;
  const isEmpty = () => size() == 0;

  return {
    enqueue: (e) => {
      list.push(e);
    },
    dequeue: () => {
      if (isEmpty()) {
        throw new Error('queue is empty');
      }
      return list[front++];
    },
    front: () => list[front],
    isEmpty,
    size,
  };
}
