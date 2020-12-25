import bob from '../src';

describe('teste', () => {
  test('frog', () => {
    expect(bob(6, 5)).toBe(11);
  });
});
