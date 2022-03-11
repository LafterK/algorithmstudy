function solution(clothes) {
  const hash = clothes.reduce((prev, cl) => {
    if (prev.get(cl[1]) == null) {
      prev.set(cl[1], []);
    }
    prev.get(cl[1]).push(cl[0]);
    return prev;
  }, new Map());
  const keys = Array.from(hash.keys());
  return keys.reduce((prev, cur) => prev * (hash.get(cur).length + 1), 1) - 1;
}
