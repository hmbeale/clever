const now = require("performance-now");
const bigArrObject = require('./bigArr.js');
const input = bigArrObject['bigArr'];

const t0 = now();


let sorted = new Map(); //very dumb global variable that tracks sorted indexes

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
//console.log(input);
multiSort(input);
//console.log(input);
const t1 = now();
console.log(t1-t0);
