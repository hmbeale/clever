const now = require("performance-now");
const bigArrObject = require('./bigArr.js');
const input = bigArrObject['bigArr'];

const t0 = now();

input.sort((a, b) => a - b);
//console.log(input);

const t1 = now();
console.log(t1-t0);
