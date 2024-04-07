const assert = require('node:assert/strict');

const sort = (array) => {
  
};


assert.deepEqual(sort([5, 4, 2, 1]), [1, 2, 4, 5], 'Error');
assert.deepEqual(sort([5, 2, 4, 2, 1]), [1, 2, 2, 4, 5], 'Doublicates check');
assert.deepEqual(sort([-5, 4, -2, 1]), [-5, -2, 1, 4], 'Negative numbers');