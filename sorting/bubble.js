const assert = require('node:assert/strict')

const sort = (array) => {
  // mutates the passed array
  for (let i = 0; i < array.length; ++i) {
    for (let j = 0; j < array.length - 1 - i; ++j) {
      if (array[j + 1] < array[j]) {
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
};


assert.deepEqual(sort([5, 4, 2, 1]), [1, 2, 4, 5], 'Error');
assert.deepEqual(sort([5, 2, 4, 2, 1]), [1, 2, 2, 4, 5], 'Doublicates check');
assert.deepEqual(sort([-5, 4, -2, 1]), [-5, -2, 1, 4], 'Negative numbers');
// module.exports = sort 