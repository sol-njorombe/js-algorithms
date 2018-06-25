function genArray(size){
  let arr = [];
  for(let i = 0; i < size; i++){
    arr.push(Math.floor(Math.random() * 10000));
  }
  return arr;
}

module.exports = ({
  genArray
});