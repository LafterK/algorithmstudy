/**
 * 
 * @param {string[]} operations 
 * @returns 
 */

 class Heap {
    constructor() {
      this.heap = []; 
    }
    insert(value) {
        this.heap.push(value);
        let curIdx = this.heap.length - 1;
        let parIdx = curIdx -1;
      

        while( this.heap[parIdx] < this.heap[curIdx]) {
      
            this.swap(parIdx, curIdx)
            curIdx = parIdx;
            parIdx = curIdx -1;
        }

        this.maxIdx++ 
    }
    swap(a, b) {
        [ this.heap[a], this.heap[b] ] = [ this.heap[b], this.heap[a] ];
    }

      

    deleteMax(){
        this.heap.shift()
    }
    deleteMin(){
        this.heap.pop()
    }

    printMinMax(){
        if(this.heap.length === 0) return [0,0]
        return[this.heap[0],this.heap[this.heap.length -1 ]]
    }
  }

function solution(operations) {


    const heap = new Heap()
    const op = operations.map((v)=> v.split(" "))

    for (const operation of op) {
    const [order , num] = operation
   
    if(order === "I") heap.insert(+num)
    if(order === "D"){
        if(num === "-1"){
            heap.deleteMin()
        }
        if(num === "1") heap.deleteMax()
    }
  
}
console.log(heap.heap)
    return heap.printMinMax();
}


const arr= 	["I -45", "I 653", "D 1", "I -642", "I 45", "I 97", "D 1", "D -1", "I 333"]
console.log(solution(arr))