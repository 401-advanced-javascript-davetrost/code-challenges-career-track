function add(date, diff) {
  if(typeof date !== 'object') throw 'Exception: input must be a date object';

  const millisecondsLookup = {
    s: 1000,
    m: 1000 * 60,
    h: 1000 * 60 * 60,
    d: 1000 * 60 * 60 * 24,
    w: 1000 * 60 * 60 * 24 * 7,
    M: 0,
    Y: 0,
  };

  let newDate = new Date(date);
  const diffInMilliseconds = Object.keys(millisecondsLookup).reduce((ms, key) => {
    const count = diff.includes(key) ? +diff.split(key)[0].split(new RegExp(Object.keys(millisecondsLookup).join('|'), 'g')).pop() : 0;
    if(key === 'M') newDate.setMonth(newDate.getMonth() + count);
    if(key === 'Y') newDate.setFullYear(newDate.getFullYear() + count);
    return ms + millisecondsLookup[key] * count;
  }, 0);

  return new Date(newDate.valueOf() + diffInMilliseconds);
}

module.exports = { add };