function solution(n, info) {
 let maxDiff = 0;
 let ryonInfo = Array(11).fill(0);

 const dfs = (pScore, rScore, count, idx, arr) => {
  if (n < count) return;
  if (idx > 10) {
   let diff = rScore - pScore;
   if (diff > maxDiff) {
    arr[10] = n - count;
    maxDiff = diff;
    ryonInfo = arr;
   }
   return;
  }

  let copy = [...arr];
  copy[10 - idx] = info[10 - idx] + 1;
  dfs(pScore, rScore + idx, count + info[10 - idx] + 1, idx + 1, copy);

  if (info[10 - idx] > 0) {
   dfs(pScore + idx, rScore, count, idx + 1, arr);
  } else {
   dfs(pScore, rScore, count, idx + 1, arr);
  }
 };
 dfs(0, 0, 0, 0, ryonInfo);

 if (maxDiff <= 0) return [-1];
 else return ryonInfo;
}
