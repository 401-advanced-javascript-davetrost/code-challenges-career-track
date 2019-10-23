const { add } = require('../challenges/dateAdder/date-adder');

describe('date adder', () => {

  const date = new Date('Sun, 22 Dec 2019 21:51:51 GMT'); 

  it('adds 1 day or 1 week or 1 month or 1 year to the date', () => {
    expect(add(date, '1d').toUTCString()).toBe('Mon, 23 Dec 2019 21:51:51 GMT');
    expect(add(date, '1w').toUTCString()).toBe('Sun, 29 Dec 2019 21:51:51 GMT');
    expect(add(date, '1M').toUTCString()).toBe('Wed, 22 Jan 2020 21:51:51 GMT');
    expect(add(date, '1Y').toUTCString()).toBe('Tue, 22 Dec 2020 21:51:51 GMT');
  });
  it('adds 1 second/minute/hour to the time', () => {
    expect(add(date, '1s').toUTCString()).toBe('Sun, 22 Dec 2019 21:51:52 GMT'); 
    expect(add(date, '1m').toUTCString()).toBe('Sun, 22 Dec 2019 21:52:51 GMT'); 
    expect(add(date, '1h').toUTCString()).toBe('Sun, 22 Dec 2019 22:51:51 GMT'); 
  });
  it('flags an error if the incoming object is not a valid date', () => {
    expect(() => add('date', '1h')).toThrow('Exception: input must be a date object'); 
  });

});
