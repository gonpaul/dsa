const assert = require('node:assert/strict');

const func = (array) => {
  const counter = {};
  for (const number of array) { // O(n)
    if (counter[number]) {
      return number;
    }
    counter[number] = (counter[number] + 1) || 1;
  }
  return undefined;
}

assert.deepEqual(func([1, 2, 2, 1]), 2);
assert.deepEqual(func([1, -2, -2, 1]), -2);
assert.deepEqual(func([1, 2]), undefined);