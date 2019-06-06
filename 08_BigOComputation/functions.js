function OofN(arr = [1,2,3,4,5,6,7]) {
  let sum = 0;
  let product = 1;
  arr.forEach(val => {
    sum += val;
    product *= val;
  })
  return { sum, product };
}

module.exports = {
  OofN
};