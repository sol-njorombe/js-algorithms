const assert = require('chai').assert;
const sort = require('../02_sorting');

const arr = [3,2,1];
const result = [1,2,3,];
describe('Sorting Algorithms', function(){
  it('assert that bubble sort works', function(){
    assert.deepEqual(sort.bubbleSort([...arr]), result);
  });

  it('assert that selection sort works', function(){
    assert.deepEqual(sort.selectionSort([...arr]), result);
  });

  it('assert that insertion sort works', function(){
    assert.deepEqual(sort.insertionSort([...arr]), result);
  });

  it('assert that merge sort works', function(){
    assert.deepEqual(sort.mergeSort([...arr]), result);
  });

  it('assert that Quick sort works', function(){
    assert.deepEqual(sort.quickSort([...arr]), result);
  });

  it('assert that Heap sort works', function(){
    assert.deepEqual(sort.heapSort([...arr]), result);
  });
});