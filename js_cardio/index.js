function reverseString1(str) {
  return str.split('').reverse().join('');
}

function reverseString2(str) {
  let result = '';
  str = str.split('');
  for(let i = 0; i < str.length; i++)
    result = str[i] + result;
  
  return result;
}

function reverseString3(str) {
  let result = '';
  for(let char of str.split(''))
    result = char + result;
  
  return result;
}

function reverseString4(str) {
  let result = '';
  str.split('').forEach( char => result = char + result );
  return result;
}

function reverseString5(str) {
  return str.split('').reduce( (result, char) => char + result, '');
}

function isPalindrome(str) {
  let strArr = str.split('');
  let start = 0
  let end = strArr.length - 1;
  while(start < end){
    if(strArr[start] !== strArr[end])
      return false;
    start++;
    end--;
  }
  return true;
}

function reverseInt(int) {
  let reversed = Math.abs(int).toString().split('').reverse().join('');
  return Math.sign(int) * Number(reversed);
}

function capitalize(sentence) {
  let arr = sentence.split(' ');
  arr = arr.map( word => word.charAt(0).toUpperCase() + word.substr(1));
  return arr.join(' ');
}

function maxChar(str) {
  let chars = {};
  let max = 0;
  let maxLetter = '';
  str.toLowerCase().split('').forEach( char => {
    if(chars[char]){
      chars[char]++;
    }else{
      chars[char] = 1;
    }
    if(chars[char] > max){
      maxLetter = char;
      max = chars[char];
    }
  });
  return maxLetter;
}


function fizzbuzz(n) {
  for(let i = 0; i <= n; i++){
    if(i % 3 === 0 && i % 5 === 0)
      console.log('fizzbuzz');
    else if(i % 3 === 0)
      console.log('fizz');
    else if(i % 5 === 0)
      console.log('buzz');
  }
}


module.exports = {
  reverseString1,
  reverseString2,
  reverseString3,
  reverseString4,
  reverseString5,
  isPalindrome,
  reverseInt,
  capitalize,
  maxChar,
  fizzbuzz
}


