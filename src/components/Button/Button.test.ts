import { isDisabled, hasLabel } from './Button.lib';

describe('Button Component', () => {
  test('should be disabled when disabled prop is true', () => {
    expect(isDisabled(true)).toBeTruthy();
  });

  test('should not be disabled when disabled prop is false', () => {
    expect(isDisabled(false)).toBeFalsy();
  });

  test('should have a non-empty label', () => {
    expect(hasLabel('Button')).toBeTruthy();
  });

  test('should not have an empty label', () => {
    expect(hasLabel('')).toBeFalsy();
  });
});
