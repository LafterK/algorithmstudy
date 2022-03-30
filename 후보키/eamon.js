function combination(combi, arr, select, n, r, count) {
 if (r == 0) return combi.push(select);
 if (n == 0 || n < r) return;
 select.push(arr[count]);
 combination(combi, arr, [...select], n - 1, r - 1, count + 1);
 select.pop();
 combination(combi, arr, [...select], n - 1, r, count + 1);
 return combi;
}

/**
 *
 * @param {string[][]} relation
 * @returns
 */
function solution(relation) {
 let answer = 0;
 const n = relation[0].length;
 const idxArr = Array.from({ length: n }, (e, i) => i);
 const setArr = [];

 for (let r = 1; r <= idxArr.length; ++r) {
  const combi = combination([], idxArr, [], idxArr.length, r, 0);

  for (const combiIndex of combi) {
   const set = new Set();
   const subSet = setArr.some((ele) => {
    let cnt = 0;
    for (let i = 0; i < ele.length; ++i) {
     if (combiIndex.join('').search(ele[i]) > -1) ++cnt;
    }
    if (cnt == ele.length) return true;
   });
   if (subSet) continue;

   relation.forEach((row) => {
    set.add(
     combiIndex.reduce((arr, cur) => {
      return (arr += row[cur]);
     }, '')
    );
   });
   if (set.size == relation.length) {
    setArr.push(combiIndex.join(''));
    ++answer;
   }
  }
 }

 return answer;
}

const relation = [
 ['100', 'ryan', 'music', '2'],
 ['200', 'apeach', 'math', '2'],
 ['300', 'tube', 'computer', '3'],
 ['400', 'con', 'computer', '4'],
 ['500', 'muzi', 'music', '3'],
 ['600', 'apeach', 'music', '2'],
];
