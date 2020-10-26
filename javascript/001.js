// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.

const range = (limit) => {
  let arr = [];
  for (let i = 0; i <= limit; i++) {
    arr.push(i);
  }

  return arr;
};

const sumAll = (limit) => {
  return range(limit)
    .filter((n) => n % 3 == 0 || n % 5 == 0)
    .reduce((a, b) => a + b, 0);
};

console.log(sumAll(999));
