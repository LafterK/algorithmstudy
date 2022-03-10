/**
 * @param {number[]} priorities
 * @param {number} location
 * @returns {number}
 */
function solution(priorities, location) {
  // hash를 쓰는 키 아이디어 -> 인쇄작업의 중요도가 1~9 사이로 한정적임 (T(n) = 10n 으로 단축가능)
  const hash = priorities.reduce((prev, cur, i) => {
    if (prev[cur] == null) {
      prev[cur] = 0;
    }
    prev[cur]++;
    return prev;
  }, {});
  function existGraterThan(num) {
    // O(n^2) 회피
    for (let i = num + 1; i < 10; i++) {
      if (hash[i] > 0) {
        return true;
      }
    }
    return false;
  }
  const q = queue(priorities.map((p, i) => ({ location: i, priority: p })));
  const printList = [];
  while (!q.isEmpty()) {
    /** @type { {location: number, priority: number} } doc */
    const doc = q.dequeue();
    if (existGraterThan(doc.priority)) {
      q.enqueue(doc);
      continue;
    }
    hash[doc.priority]--;
    printList.push(doc);
  }
  return printList.findIndex((j) => j.location === location) + 1;
}

/**
 * @param {number[]} arr
 */
function queue(arr) {
  const list = Array.isArray(arr) ? [...arr] : [];
  let head = 0;
  function isEmpty() {
    return list.length === head;
  }
  return {
    enqueue: (e) => {
      list.push(e);
    },
    dequeue: () => {
      if (isEmpty()) {
        throw new Error('Queue is empty');
      }
      return list[head++];
    },
    isEmpty,
  };
}

console.log(solution([1, 1, 9, 1, 1, 1], 0));
