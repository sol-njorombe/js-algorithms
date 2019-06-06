const algorithms = require('.');

const arr = [ 5, 3, 76, 45, 78, 94, 863, 4653, 354, 253, 635 ];
const result = 10;
const searchVal = arr[result];

describe('Searching Algorithms', function(){
  test('assert that linear search works', function(){
    expect(Number(algorithms.linearSearch(arr, searchVal))).toEqual(result);
  });

  test('assert that binary search works', function(){
    expect(algorithms.binarySearch(arr, searchVal)).toEqual(result);
  });

});



