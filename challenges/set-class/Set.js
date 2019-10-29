module.exports = class Set {
  constructor() {
    this.storage = {};
    this.objectKey = 'object';
    this.objectStorage = [];
  }

  add(item) {
    if(this.has(item)) return null;

    if(this.itemIsObject(item)) {
      this.objectStorage.push(item);
      return item;
    }
    this.storage[item] = true;
    return item;
  }
 
  remove(item) {
    if(!this.has(item)) return null;

    if(this.itemIsObject(item)) {
      this.objectStorage.splice(this.objectStorage.indexOf(item), 1);
      return item;
    }
    delete this.storage[item];
    return item;
  }

  has(item) {
    if(this.itemIsObject(item)) {
      return this.objectStorage.includes(item);
    }
    return this.storage[item]; // should be _true_ because that's how we stored it
  }

  itemIsObject(item) {
    return (typeof item === 'object');
  }

  toString() {
    return [...Object.keys(this.storage), ...this.objectStorage]
      .reduce((output, item) => output += item + ' ', '');
  }

  static intersection(setA, setB) {
    const setI = new Set();
    [...Object.keys(setA.storage), ...setA.objectStorage].forEach(item => {
      if(setB.has(item)) setI.add(item);
    });
    return setI;
  }
  intersection(setB) {
    return Set.intersection(this, setB);
  }

  static union(setA, setB) {
    const setI = new Set();
    [
      ...Object.keys(setA.storage),
      ...setA.objectStorage,
      ...Object.keys(setB.storage),
      ...setB.objectStorage,
    ].forEach(item => {
      setI.add(item);
    });
    return setI;
  }
  union(setB) {
    return Set.union(this, setB);
  }

  static difference(setA, setB) {
    const setI = new Set();
    [...Object.keys(setA.storage), ...setA.objectStorage].forEach(item => {
      if(!setB.has(item)) setI.add(item);
    });
    [...Object.keys(setB.storage), ...setB.objectStorage].forEach(item => {
      if(!setA.has(item)) setI.add(item);
    });
    return setI;
  }
  difference(setB) {
    return Set.difference(this, setB);
  }

};