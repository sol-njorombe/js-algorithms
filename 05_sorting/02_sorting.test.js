const sort = require('.');

const arr = [3,2,1];
const result = [1,2,3,];
describe('Sorting Algorithms', function(){
  test('assert that bubble sort works', function(){
    expect(sort.bubbleSort([...arr])).toEqual(result);
  });

  test('assert that selection sort works', function(){
    expect(sort.selectionSort([...arr])).toEqual(result);
  });

  test('assert that insertion sort works', function(){
    expect(sort.insertionSort([...arr])).toEqual(result);
  });

  test('assert that merge sort works', function(){
    expect(sort.mergeSort([...arr])).toEqual(result);
  });

  test('assert that Quick sort works', function(){
    expect(sort.quickSort([...arr])).toEqual(result);
  });

  test('assert that Heap sort works', function(){
    expect(sort.heapSort([...arr])).toEqual(result);
  });
});