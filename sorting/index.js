function swap(arr, left, right){
  let temp = arr[left];
  arr[left] = arr[right];
  arr[right] = temp;
}

function bubbleSort(arr){
  for (let i in arr){
    for( let j = arr.length - 1; j > i; j--){
      if(arr[j] < arr[j - 1]){
        swap(arr, j - 1, j);
      }
    }
  }
  return arr;
}


function selectionSort(arr){
  for(let i in arr){
    let minIndex = i;
    for(let j = i; j < arr.length; j++){ 
      if(arr[j] < arr[minIndex])
        minIndex = j;
    }
    swap(arr, i, minIndex);
  }
  return arr;
}

function insertionSort(arr){
  for(let i = 0; i < arr.length - 1; i++){
    for(let j = i + 1; j >= 0; j--){
      if(arr[j] < arr[j - 1]){
        swap(arr, j - 1, j);
      }else{
        break;
      }
    }
  }
  return arr;
}

function merge(arrA, arrB){
  let resultArr = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while(leftIndex < arrA.length && rightIndex < arrB.length){
    if( (arrA[leftIndex] < arrB[rightIndex]) ){
      resultArr.push(arrA[leftIndex]);
      leftIndex++;
    }else{
      resultArr.push(arrB[rightIndex]);
      rightIndex++;
    }
  }

  return resultArr.concat(arrA.slice(leftIndex, arrA.length)).concat(arrB.slice(rightIndex, arrB.length));
}

function mergeSort(arr){
  if(arr.length > 1){
    let middle = Math.floor(arr.length / 2);
    let left = arr.slice(0, middle);
    let right = arr.slice(middle, arr.length);
    return merge(mergeSort(left), mergeSort(right));
  }
  return arr;
}

function partition(arr, left, right, pivot){
  let index = left;

  for(let i = left; i < right; i++){
    if(arr[i] < arr[pivot]){
      swap(arr, i, index);
      index++;
    }
  }

  swap(arr, right, index);
  return index;
}

function sortQuickSort(arr, left, right){
  if(left < right){
    let pivot = right;
    let index = partition(arr, left, right, pivot);
    sortQuickSort(arr, left, index - 1);
    sortQuickSort(arr, index + 1, right);
  }
  return arr;
}

function quickSort(arr){
  return sortQuickSort(arr, 0, arr.length - 1);
}

function siftDown(arr, start, end){
  let root = start;
  let child = root*2 +1;
  let toSwap = root;

  while(child <= end){
    if(arr[toSwap] < arr[child]){
      swap(arr, toSwap, child);
    }

    if(child+1 < end && arr[toSwap] < arr[child + 1]){
      swap(arr, toSwap, child +1);
    }

    if(toSwap != root){
      swap(arr, root, toSwap);
      root = toSwap;
    } else {
      return;
    }

    toSwap = root;
    child = root*2 + 1;
  }
}

function heapify(arr, len){
  let mid = Math.floor((len-2)/2);
  while(mid >= 0){
    siftDown(arr, mid--, len-1);
  }
}

function heapSort(arr){
  let len = arr.length;
  let end = arr.length - 1;
  heapify(arr, len);

  while( end > 0){
    swap(arr, end--, 0);
    siftDown(arr, 0, end);
  }
  
  return arr;
}

module.exports = ({
  bubbleSort,
  selectionSort,
  insertionSort,
  mergeSort,
  quickSort,
  heapSort
});