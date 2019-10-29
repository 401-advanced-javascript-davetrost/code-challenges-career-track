const Set = require('../challenges/set-class/Set');

let setA;
let setB;
const foo = 'foo';
const bar = 'bar';
const arr = [1, 2, 3];
const arr1 = [1, 2];
const obj = { a: 'a', b: 'b', c: 'c' };

describe('my set class', () => {

  it('instantiates an empty set and adds an item', () => {
    setA = new Set();
    setA.add(foo);
    expect(setA.toString()).toBe('foo '); 
  });

  it('ignores an item that is already in the set', () => {
    setA.add(foo);
    expect(setA.toString()).toBe('foo '); 
  });

  it('adds an array and an object to the set', () => {
    setA.add(arr);
    setA.add(obj);
    expect(setA.toString()).toBe('foo 1,2,3 [object Object] '); 
  });
  
  it('removes objects from the set', () => {
    setA.remove(foo);
    expect(setA.toString()).toBe('1,2,3 [object Object] '); 
    setA.remove(arr);
    expect(setA.toString()).toBe('[object Object] '); 
    setA.remove(obj);
    expect(setA.toString()).toBe(''); 
  });
});

 
describe('union, intersection and difference functions', () => {
  
  beforeEach(() => {
    setA = new Set();
    setA.add(foo);
    setA.add(bar);
    setA.add(arr);
    setA.add(obj);
    setB = new Set();
    setB.add(foo);
    setB.add(arr);
    setB.add(arr1);
    setB.add(obj);
  });

  it('performs a union between this set and another set', () => {
    expect(setA.union(setB).toString()).toBe('foo bar 1,2,3 [object Object] 1,2 '); 
    expect(Set.union(setA, setB).toString()).toBe('foo bar 1,2,3 [object Object] 1,2 '); 
  });
  
  it('performs an intersection between this set and another set', () => {
    expect(setA.intersection(setB).toString()).toBe('foo 1,2,3 [object Object] '); 
    expect(Set.intersection(setA, setB).toString()).toBe('foo 1,2,3 [object Object] '); 
  });

  it('performs a symmetrical difference between this set and another set', () => {
    expect(setA.difference(setB).toString()).toBe('bar 1,2 '); 
    expect(Set.difference(setA, setB).toString()).toBe('bar 1,2 '); 
  });

});
