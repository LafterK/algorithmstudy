/**
 *
 * @param {number[]} fees
 * @param {string[]} records
 * @returns
 */
function solution(fees, records) {
  const MIDNIGHT = 60 * 23 + 59;
  const [defaultTime, defaultFee, unitTime, unitFee] = fees;
  const dailyData = records.reduce((prev, cur) => {
    const [time, carNumber, inout] = cur.split(' ');
    const [minutes, seconds] = time.split(':');
    const timestamp = parseInt(minutes) * 60 + parseInt(seconds);
    if (prev.get(carNumber) == null) {
      //First In
      prev.set(carNumber, {
        carNumber,
        lastIn: timestamp,
        lastOut: 0,
        parkingTime: 0,
      });
      return prev;
    }
    const lastRecord = prev.get(carNumber);
    if (inout === 'IN') {
      // 입차
      lastRecord.lastIn = timestamp;
    } else {
      // 출차
      lastRecord.parkingTime += timestamp - lastRecord.lastIn;
      lastRecord.lastOut = timestamp;
    }
    return prev;
  }, new Map());
  const result = [];
  for (const [_, data] of dailyData) {
    if (data.lastIn >= data.lastOut) {
      data.parkingTime += MIDNIGHT - data.lastIn;
      data.lastOut = MIDNIGHT;
    }
    result.push(data);
  }
  console.log(result);

  return result
    .sort((a, b) => a.carNumber - b.carNumber)
    .map((car) => {
      if (car.parkingTime <= defaultTime) {
        return defaultFee;
      } else {
        return (
          defaultFee +
          Math.ceil((car.parkingTime - defaultTime) / unitTime) * unitFee
        );
      }
    });
}

// console.log(
//   solution(
//     [180, 5000, 10, 600],
//     [
//       '05:34 5961 IN',
//       '06:00 0000 IN',
//       '06:34 0000 OUT',
//       '07:59 5961 OUT',
//       '07:59 0148 IN',
//       '18:59 0000 IN',
//       '19:09 0148 OUT',
//       '22:59 5961 IN',
//       '23:00 5961 OUT',
//     ]
//   )
// ); // [14600, 34400, 5000]

console.log(solution([1, 461, 1, 10], ['00:00 1234 IN'])); // [14841]
