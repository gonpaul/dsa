const assert = require('node:assert/strict')

const sort = (array) => {
  for (let i = 0; i < array.length; ++i) {
    let minInd = i;
    let min = array[i];
    for (let j = i + 1; j < array.length; ++j) {
      if (array[j] < min) {
        min = array[j];
        minInd = j;
      }
    }
    if (array[minInd] !== array[i]) {
      const temp = array[i];
      array[i] = array[minInd];
      array[minInd] = temp;
    }
  }
  return array;
};

assert.deepEqual(sort([5, 4, 2, 1]), [1, 2, 4, 5], 'Error');
assert.deepEqual(sort([5, 2, 4, 2, 1]), [1, 2, 2, 4, 5], 'Doublicates check');
assert.deepEqual(sort([-5, 4, -2, 1]), [-5, -2, 1, 4], 'Negative numbers');