let { binarySearch } = require('./challenges/arrayBinarySearch/array-binary-search');

const smallArray = [];
const smallArraySize = 100;
const mediumArray = [];
const mediumArraySize = 10000;
const largeArray = [];
const largeArraySize = 100000;

for(let i = 0; i < largeArraySize; i++) {
  if(i < smallArraySize) smallArray[i] = i;
  if(i < mediumArraySize) mediumArray[i] = i;
  if(i < largeArraySize) largeArray[i] = i;
} 

/*
  How to use the hrtime module in Node comes from: https://blog.abelotech.com/posts/measure-execution-time-nodejs-javascript/
*/
let hrStart;
let hrEnd;
let hrMilliseconds = 0;

hrStart = process.hrtime();
for(let i = 0; i < 1000; i++) {
  const searchEle = Math.floor(Math.random() * smallArraySize);
  binarySearch(smallArray, searchEle);
}
hrEnd = process.hrtime(hrStart);
hrMilliseconds = hrEnd[0] * 1000 + hrEnd[1] / 1e6;
console.log(`IGNORE THIS OUTPUT <<< ${hrMilliseconds.toPrecision(6)} >>>`);

hrStart = process.hrtime();
for(let i = 0; i < 1000; i++) {
  const searchEle = Math.floor(Math.random() * smallArraySize);
  binarySearch(smallArray, searchEle);
}
hrEnd = process.hrtime(hrStart);
hrMilliseconds = hrEnd[0] * 1000 + hrEnd[1] / 1e6;
console.log(`Execution time for 1000 random searches in an array with ${smallArraySize} elements: ${hrMilliseconds.toPrecision(6)}ms *** Average wrt array length = ${(hrMilliseconds / smallArraySize).toPrecision(6)}ms ***`);

hrStart = process.hrtime();
for(let i = 0; i < 1000; i++) {
  const searchEle = Math.floor(Math.random() * mediumArraySize);
  binarySearch(mediumArray, searchEle);
}
hrEnd = process.hrtime(hrStart);
hrMilliseconds = hrEnd[0] * 1000 + hrEnd[1] / 1e6;
console.log(`Execution time for 1000 random searches in an array with ${mediumArraySize} elements: ${hrMilliseconds.toPrecision(6)}ms *** Average wrt array length = ${(hrMilliseconds / mediumArraySize).toPrecision(6)}ms ***`);

hrStart = process.hrtime();
for(let i = 0; i < 1000; i++) {
  const searchEle = Math.floor(Math.random() * largeArraySize);
  binarySearch(largeArray, searchEle);
}
hrEnd = process.hrtime(hrStart);
hrMilliseconds = hrEnd[0] * 1000 + hrEnd[1] / 1e6;
console.log(`Execution time for 1000 random searches in an array with ${largeArraySize} elements: ${hrMilliseconds.toPrecision(6)}ms *** Average wrt array length = ${(hrMilliseconds / largeArraySize).toPrecision(6)}ms ***`);

