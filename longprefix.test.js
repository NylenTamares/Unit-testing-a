const longprefix = require('./longprefix');

describe('Longest Common Prefix', () => {
  test('should return "fl" for ["flower", "flow", "flight"]', () => {
    expect(longprefix (["flower", "flow", "flight"])).toBe("fl");
  });

  test('should return "" for ["dog", "racecar", "car"]', () => {
    expect(longprefix (["dog", "racecar", "car"])).toBe("");
  });

  test('should return "" for an empty array', () => {
    expect(longprefix([])).toBe("");
  });


});