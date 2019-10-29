module.exports = function insertionSort(arr) {
  for(let i = 1; i < arr.length; i++) {
    
    let j = i - 1;
    const currentToSort = arr[i];
    
    while(j >= 0 && currentToSort < arr[j]) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = currentToSort;
    
  }
};