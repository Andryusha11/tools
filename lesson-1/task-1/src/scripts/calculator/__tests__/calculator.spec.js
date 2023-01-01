import { mult, sum } from '../calculator';

it('should sum two numbers', () => {
  expect(sum(3, 8)).toEqual(11);
});

it('should sum two numbers', () => {
  expect(sum(2, 2)).toEqual(4);
});

it('should mult two numbers', () => {
  expect(mult(3, 8)).toEqual(24);
});

it('should mult two numbers', () => {
  expect(mult(2, 2)).toEqual(4);
});
