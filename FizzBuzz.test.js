const fizzBuzz = require('../FizzBuzz');

test('número divisible por 3 y 5', () => {
  expect(fizzBuzz(15)).toBe('fizzbuzz');
});

test('número divisible por 3', () => {
  expect(fizzBuzz(6)).toBe('fizz');
});

test('número divisible por 5', () => {
  expect(fizzBuzz(10)).toBe('buzz');
});

test('número no divisible por 3 ni 5', () => {
  expect(fizzBuzz(2)).toBe(2);
});