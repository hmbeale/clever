//http://me.dt.in.th/page/Quicksort/
const now = require("performance-now");
const t0 = now();
//const input = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3]; //works
//const input = [4, 1, 6, 1, 9, 5, 6, 7]; //works
const input = [1, -5 , 70, 0]; //works

let sorted = new Map(); //very dumb global variable that tracks sorted indexes

//console.log(input);

const partition = (arr, pivot) => {
  //iterate arr
  for (let i = pivot; i < arr.length; i++) {
    if (arr[i] < arr[pivot]) {
      [arr[pivot], arr[i]] = [arr[i], arr[pivot]];
    }
  }
};

//pivot is index of pivot
const pivotSwap = (arr, pivot) => {
  let pivotTo = null;
  //swaps pivot to middle
  for (let i = pivot + 1; i < arr.length; i++) {
    if (arr[i] >= arr[pivot]) {
      pivotTo = i - 1;
      sorted.set(pivotTo, true);
      break;
    }
  }
  if (pivotTo) {
    [arr[pivot], arr[pivotTo]] = [arr[pivotTo], arr[pivot]];
  }
};

const oneSort = (arr, pivot) => {
  partition(arr, pivot);
  pivotSwap(arr, pivot);
  //console.log(arr);
};

//sorts low to high
const multiSort = arr => {
  for (let i = 0; i < arr.length; i++) {
    if (!sorted.has(i)) {
      oneSort(arr, i);
    }
  }
};

multiSort(input);
const t1 = now();
console.log(t1-t0);
