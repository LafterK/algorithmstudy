/**
 *
 * @param {string[]} id_list
 * @param {string[]} report
 * @param {number} k
 * @returns
 */
function solution(id_list, report, k) {
 var answer = [];
 const arr = Array.from({ length: id_list.length }, () => ({
  number: 0,
  user: new Set([]),
 }));

 report.forEach((v) => {
  const [s, e] = v.split(' ');
  const i = id_list.indexOf(e);
  const j = id_list.indexOf(s);
  if (!arr[j].user.has(e)) {
   arr[i].number += 1;
  }
  arr[j].user.add(e);
 });

 const stopUser = id_list.filter((v, i) => arr[i].number >= k);

 return arr.map(
  (v) => Array.from(v.user).filter((v) => stopUser.includes(v)).length
 );
}
