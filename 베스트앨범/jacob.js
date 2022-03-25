/**
 *
 * @param {string[]} genres
 * @param {number[]} plays
 * @returns {number[]}
 */
function solution(genres, plays) {
  const hash = plays.reduce((prev, play, i) => {
    const genre = genres[i];
    if (prev.get(genre) == null) {
      prev.set(genre, {
        totalPlay: 0,
        musics: priorityQueue((a, b) => {
          if (a.play === b.play) {
            return b.id - a.id;
          }
          return a.play - b.play;
        }),
      });
    }
    prev.get(genre).totalPlay += play;
    prev.get(genre).musics.enqueue({ id: i, play });
    return prev;
  }, new Map());

  return [...hash]
    .sort((a, b) => b[1].totalPlay - a[1].totalPlay)
    .map((g) => g[1].musics)
    .reduce((prev, cur) => {
      let count = 0;
      while (!cur.isEmpty() && count < 2) {
        prev.push(cur.dequeue().id);
        count++;
      }
      return prev;
    }, []);
}

/**
 * @param {(a: any, b: any) => number} compare
 */
function priorityQueue(compare) {
  const tree = [];
  const ROOT = 0;
  function swap(arr, a, b) {
    const temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
  }
  function shiftDown() {
    let current = ROOT;
    let leftChild = 2 * current + 1;
    while (leftChild < tree.length) {
      // while child exists
      const rightChild = leftChild + 1;
      let nextChild =
        rightChild < tree.length &&
        compare(tree[rightChild], tree[leftChild]) > 0
          ? rightChild
          : leftChild;
      if (compare(tree[current], tree[nextChild]) > 0) {
        break;
      }
      swap(tree, current, nextChild);
      current = nextChild;
      leftChild = 2 * current + 1;
    }
  }
  return {
    enqueue: (e) => {
      tree.push(e);
      let current = tree.length - 1;
      let parent = Math.floor((current - 1) / 2);
      while (current != ROOT && compare(tree[current], tree[parent]) > 0) {
        swap(tree, parent, current);
        current = parent;
        parent = Math.floor((current - 1) / 2);
      }
    },
    dequeue: () => {
      swap(tree, ROOT, tree.length - 1);
      const result = tree.pop();
      shiftDown();
      return result;
    },
    head: () => {
      if (tree.length === 0) {
        throw new Error('Queue is Empty');
      }
      return tree[0];
    },
    isEmpty: () => {
      return tree.length === 0;
    },
    size: () => {
      return tree.length;
    },
    tree: () => {
      return tree;
    },
  };
}

console.log(
  solution(
    ['classic', 'pop', 'classic', 'classic', 'pop'],
    [500, 600, 150, 800, 2500]
  )
);
