import balancedBrackets from './balancedBrackets.js';

describe('balancedBrackets', () => {
  test('проверяем на сбалансированные скобки', () => {
    expect(balancedBrackets('()')).toBe(true);
    expect(balancedBrackets('[]')).toBe(true);
    expect(balancedBrackets('{}')).toBe(true);
    expect(balancedBrackets('()[]{}')).toBe(true);
    expect(balancedBrackets('{[]}')).toBe(true);
    expect(balancedBrackets('({[]})')).toBe(true);
  });

  test('проверяем на несбалансированные скобки', () => {
    expect(balancedBrackets('(')).toBe(false);
    expect(balancedBrackets(')')).toBe(false);
    expect(balancedBrackets('([)]')).toBe(false);
    expect(balancedBrackets('((())')).toBe(false);
    expect(balancedBrackets('}{')).toBe(false);
  });

  test('проверяем на пустую строку', () => {
    expect(balancedBrackets('')).toBe(true);
  });

  test('проверяем на игнорирование других символов', () => {
    expect(balancedBrackets('const a = (x) => { return [x]; }')).toBe(true);
    expect(balancedBrackets('(a + b) * {c - [d / e]}')).toBe(true);
    expect(balancedBrackets('(a + b] * {c - [d / e]}')).toBe(false);
  });
});
