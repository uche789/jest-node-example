import calObj from '../src/index.js'

describe('calculate', () => {
  test('should return value', () => {
    const sum = calObj.calculateSum([1, 2, 4]);
    expect(sum).toEqual(7);
  });
});