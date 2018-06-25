function linearSearch(arr, value){
  for(let i in arr){
    if(arr[i] === value)
      return i;
  }
  return null;
}

function doBinarySearch(arr, start, end, val){
  if(start == end)
    return start;
  
  let middle = Math.ceil( (start + (end - 1)) / 2);

  if(val <= arr[middle])
    return doBinarySearch(arr, start, middle, val);
  else
    return doBinarySearch(arr, middle+1, end, val);
}

function binarySearch(arr, value){
  return doBinarySearch(arr, 0, arr.length, value);
}


module.exports = ({
  linearSearch,
  binarySearch
});