const cTable = require('console.table');
var now = require("performance-now")
const sorting = require('./index');

const dataSizes = [5, 10, 20, 40, 80, 160, 320, 640, 1280, 2560, 5120, 10240, 20480];
const algorithms = Object.keys(sorting);

function genArray(size){
  let arr = [];
  for(let i = 0; i < size; i++){
    arr.push(Math.floor(Math.random() * 10000));
  }
  return arr;
}

function getTimeToSort(arr, algorithm){
  let start = now();
  algorithm(arr);
  return now() - start;
}


let analysis = [];

for(let size of dataSizes){
  let stat = {};
  stat['size'] = size;
  for(let algo of algorithms){
    let newArr = genArray(size);
    stat[algo] = getTimeToSort(newArr, sorting[algo]).toFixed(6);
  }
  analysis.push(stat);
}
console.table(analysis);


module.exports = ({
  genArray
});
