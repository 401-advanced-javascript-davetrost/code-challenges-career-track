const insertionSort = require('../challenges/insertionSort/insertion-sort');

describe('insertion sort', () => {

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
    insertionSort(arr);
    expect(arr).toEqual([]);
    arr = [value4];
    insertionSort(arr);
    expect(arr.join(' ')).toEqual(`${value4}`);
  });

  it('sorts a simple array', () => {
    arr = [value6, value10, value5, value8, value2, value1, value3, value9, value7, value4];
    insertionSort(arr);
    expect(arr.join(' ')).toEqual(`${value1} ${value2} ${value3} ${value4} ${value5} ${value6} ${value7} ${value8} ${value9} ${value10}`);
  });

});
