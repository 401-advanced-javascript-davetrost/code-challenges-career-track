function mergeSort(arr) {
  if(arr.length <= 1) return;

  const middleIndex = Math.floor(arr.length / 2);
  const arrLeft = arr.slice(0, middleIndex);
  const arrRight = arr.slice(middleIndex, arr.length);

  mergeSort(arrLeft);
  mergeSort(arrRight);
  merge(arrLeft, arrRight, arr);
}

function merge(left, right, arr) {
  let indexArr = 0;
  let indexLeft = 0;
  let indexRight = 0;

  while(indexLeft < left.length && indexRight < right.length) {
    arr[indexArr++] = (left[indexLeft] < right[indexRight]) ? left[indexLeft++] : right[indexRight++];
  }

  while(indexLeft < left.length) {
    arr[indexArr++] = left[indexLeft++];
  }
  while(indexRight < right.length) {
    arr[indexArr++] = right[indexRight++];
  }

}

module.exports = { mergeSort, merge };
