const { mergeSort, merge } = require('../challenges/mergeSort/merge-sort');

describe('merge sort', () => {

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
    mergeSort(arr);
    expect(arr).toEqual([]);
    arr = [value4];
    mergeSort(arr);
    expect(arr.join(' ')).toEqual(`${value4}`);
  });

  it('sorts a simple array', () => {
    arr = [value6, value10, value5, value8, value2, value1, value3, value9, value7, value4];
    mergeSort(arr);
    expect(arr.join(' ')).toEqual(`${value1} ${value2} ${value3} ${value4} ${value5} ${value6} ${value7} ${value8} ${value9} ${value10}`);
  });

});

describe('merge helper function', () => {

  const value1 = 1;
  const value2 = 2;
  const value3 = 3;
  const value4 = 4;
  const value5 = 5;
  let arr = [];
  let arr1 = [value2, value4];
  let arr2 = [value1, value3, value5];

  it('merges 2 pre-sorted arrays', () => {
    merge(arr1, arr2, arr);
    expect(arr.join(' ')).toEqual(`${value1} ${value2} ${value3} ${value4} ${value5}`);
  });

});
