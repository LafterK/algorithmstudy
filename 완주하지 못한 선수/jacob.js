'use strict';
function solution(participant, completion) {
  // completion으로 hashMap 만들기
  const hash = completion.reduce((prev, cur, i) => {
    if (!prev.has(cur)) {
      prev.set(cur, 0);
    }
    prev.set(cur, prev.get(cur) + 1);
    return prev;
  }, new Map());
  // participant중 hashMap에 not hit 되는 사람들 filter
  const result = participant.filter((p) => {
    if (hash.get(p) == null || hash.get(p) === 0) {
      return true;
    }
    hash.set(p, hash.get(p) - 1);
    return false;
  });
  return result[0];
}
