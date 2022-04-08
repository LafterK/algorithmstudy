/**
 *
 * @param {number[]} array
 * @param {number[][]} commands
 * @returns
 */
function solution(array, commands) {
  return commands.map((command) => doCommand(array, command));
}

/**
 *
 * @param {number[]} arr
 * @param {number[]} command
 */
function doCommand(arr, command) {
  const [i, j, k] = command;
  return arr.slice(i - 1, j).sort((a, b) => a - b)[k - 1];
}

console.log(
  solution(
    [1, 5, 2, 6, 3, 7, 4],
    [
      [2, 5, 3],
      [4, 4, 1],
      [1, 7, 3],
    ]
  )
);

// [5, 6, 3]
