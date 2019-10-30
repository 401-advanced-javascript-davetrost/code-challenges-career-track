function quickSort(arr) {
  quickSortDivideAndConquer(arr, 0, arr.length - 1);
}

function quickSortDivideAndConquer(arr, left, right) {
  if(left >= right) return;

  const pivotIndex = partition(arr, left, right);

  quickSortDivideAndConquer(arr, left, pivotIndex - 1);
  quickSortDivideAndConquer(arr, pivotIndex + 1, right);
}

function partition(arr, left, right) {
  const pivotValue = arr[right];
  let lowIndex = left - 1;

  for(let i = left; i <= right; i++) {
    if(arr[i] < pivotValue) swap(arr, i, ++lowIndex);
  }

  swap(arr, right, lowIndex + 1);
  return lowIndex + 1;
}

function swap(arr, high, low) {
  if(high === low) return;

  let temp = arr[high];
  arr[high] = arr[low];
  arr[low] = temp;
}

module.exports = { quickSort, partition };
