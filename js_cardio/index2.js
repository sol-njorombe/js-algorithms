function longestWord(sentence) {
  let arr = sentence.toLowerCase().match(/[a-z0-9]+/g);
  arr.sort( (a, b) => b.length - a.length );
  let longest = arr.filter( word => word.length === arr[0].length);
  return longest;
}

function chunkArr(arr, length) {
  let i = 0;
  let chunked = [];
  while(i < arr.length){
    chunked.push(arr.slice(i, i + length));
    i += length;
  }

  return chunked;
}


function flatten(arr) {
  return arr.reduce( (flat, element) => flat.concat(element), [] );
}

function isAnagram(str1, str2) {
  str1 = str1.replace(/[^a-z0-9]+/g, '').split('').sort().join('');
  str2 = str2.replace(/[^a-z0-9]+/g, '').split('').sort().join('');
  return str1 === str2;
}


module.exports = {
  longestWord,
  chunkArr,
  flatten,
  isAnagram
}