/**
 *
 * @param {string[]} id_list
 * @param {string[]} report
 * @param {number} k
 * @returns { number }
 */
function solution(id_list, report, k) {
  const counting = id_list.reduce((prev, user) => {
    prev.set(user, 0);
    return prev;
  }, new Map());
  const hash = id_list.reduce((prev, user) => {
    prev.set(user, []);
    return prev;
  }, new Map());

  report.forEach((report) => {
    const [reporter, reported] = report.split(' ');
    hash.get(reported).push(reporter);
  });
  for (const user of hash.keys()) {
    hash.set(user, Array.from(new Set(hash.get(user))));
    const reporters = hash.get(user);
    if (reporters.length >= k) {
      reporters.forEach((reporter) => {
        counting.set(reporter, counting.get(reporter) + 1);
      });
    }
  }
  return id_list.map((id) => counting.get(id));
}

// console.log(
//   solution(
//     ['muzi', 'frodo', 'apeach', 'neo'],
//     ['muzi frodo', 'apeach frodo', 'frodo neo', 'muzi neo', 'apeach muzi'],
//     2
//   )
// );

console.log(
  solution(
    ['muzi', 'frodo', 'apeach', 'neo'],
    [
      'muzi frodo',
      'apeach frodo',
      'frodo neo',
      'muzi neo',
      'muzi neo',
      'muzi neo',
      'muzi neo',
      'apeach muzi',
    ],
    2
  )
);
