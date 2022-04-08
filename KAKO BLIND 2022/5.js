function solution(board, skill) {
 var answer = 0;
 let map;
 for (const skill_index of skill) {
  let [type, x1, y1, x2, y2, scale] = skill_index;
  if (type === 1) scale = scale * -1;

  board = board.map((v, i) => {
   if (i >= x1 && i <= x2) {
    return v.map((x, j) => {
     if (j >= y1 && j <= y2) {
      return x + scale;
     }
     return x;
    });
   }
   return v;
  });
 }

 return board
  .map((v) => v.filter((s) => s > 0).length)
  .reduce((acc, cur) => (acc += cur));
}
