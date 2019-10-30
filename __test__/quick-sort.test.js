const { quickSort, partition } = require('../challenges/quickSort/quick-sort');

describe('quick sort', () => {

  const value1 = 1;
  const value2 = 2;
  const value3 = 3;
  const value4 = 4;
  const value5 = 5;
  const value6 = 6;
  const value7 = 7;
  const value8 = 8;
  const value9 = 9;
  const value10 = 10;
  let arr = [];

  it('sorts empty and single value arrays', () => {
    arr = [];
    quickSort(arr);
    expect(arr).toEqual([]);
    arr = [value4];
    quickSort(arr);
    expect(arr.join(' ')).toEqual(`${value4}`);
  });

  it('sorts a simple array', () => {
    arr = [value6, value10, value5, value8, value2, value1, value3, value9, value7, value4];
    quickSort(arr);
    expect(arr.join(' ')).toEqual(`${value1} ${value2} ${value3} ${value4} ${value5} ${value6} ${value7} ${value8} ${value9} ${value10}`);
  });

});

describe('partition helper function', () => {

  const value1 = 1;
  const value2 = 2;
  const value3 = 3;
  const value4 = 4;
  const value5 = 5;
  let arr = [value2, value4, value1, value5, value3];
  let left, right, pivotResultIndex, rightValue;

  it('partitions arrays', () => {
    left = 0;
    right = 4;
    rightValue = arr[right];
    
    pivotResultIndex = partition(arr, left, right);

    expect(pivotResultIndex).toBe(2);
    expect(arr[pivotResultIndex]).toBe(rightValue);

    left = 2;
    right = 4;
    rightValue = arr[right];
    pivotResultIndex = partition(arr, left, right);
    expect(pivotResultIndex).toBe(3);
    expect(arr[pivotResultIndex]).toBe(rightValue);
  });

});
