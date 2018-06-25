const assert = require('chai').assert;
const algorithms = require('../01_search');

const arr = [ 5, 3, 76, 45, 78, 94, 863, 4653, 354, 253, 635 ];
const result = 10;
const searchVal = arr[result];

describe('Searching Algorithms', function(){
  it('assert that linear search works', function(){
    assert.equal(algorithms.linearSearch(arr, searchVal), result);
  });

  it('assert that binary search works', function(){
    assert.equal(algorithms.binarySearch(arr, searchVal), result);
  });

});



