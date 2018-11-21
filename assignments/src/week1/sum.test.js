import sum from './sum';

describe('sum', () => {
  describe('calculate', () => {
    it(' add two numbers', () => {
      const a = 2;
      const b = 3;
      expect(sum(a, b)).toBe(5);
    });
    it('not to be greater than the result sum function', () => {
      const a = 2;
      const b = 7;
      const seed = Math.floor(Math.random() * Math.floor(9));
      expect(seed).toBeLessThanOrEqual(sum(a, b));
    });
  });
});
