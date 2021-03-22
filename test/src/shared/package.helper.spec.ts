import { getVersion } from '../../../src/shared/package.helper';

describe('Test package.json parsing', () => {
  test('should return the correct "version" entry of json file', () => {
    expect(typeof getVersion()).toBe('string');
  });
});
