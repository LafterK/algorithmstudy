function solution(fees, records) {
 var answer = [];
 const [basicTime, won, unitMin, unitFee] = fees;
 const map = {};

 function convertToMin(string) {
  const [h, m] = string.split(':');
  return Number(h) * 60 + Number(m);
 }

 function diff(arr) {
  let duringTime = 0;
  let tmep = 0;
  for (let i = 0; i < arr.length; i++) {
   const [time, inorout] = arr[i];
   if (inorout === 'IN') {
    tmep = convertToMin(time);
    if (i === arr.length - 1) {
     duringTime += convertToMin('23:59') - tmep;
    }
   } else {
    duringTime += convertToMin(time) - tmep;
    tmep = 0;
   }
  }
  return duringTime;
 }

 for (record of records) {
  const [time, number, inorout] = record.split(' ');
  if (map[number]) {
   map[number] = [...map[number], [time, inorout]];
  } else {
   map[number] = [[time, inorout]];
  }
 }
 const res = Object.entries(map);
 res.sort((a, b) => {
  return a[0] - b[0];
 });
 console.log(res);

 return res.map((v) => {
  const diffTime = diff(v[1]);

  if (diffTime < basicTime) return won;
  return won + Math.ceil((diffTime - basicTime) / unitMin) * unitFee;
 });
}
