const cTable = require('console.table');
const now = require("performance-now")
const utils = require('../arrayUtilities');
const sort = require('../02_sorting/index');
const searching = require('.');

const dataSizes = [5, 10, 20, 40, 80, 160, 320, 640, 1280, 2560, 5120, 10240, 20480, 40960, 81920];
const algorithms = Object.keys(searching);

function getTimeToSort(arr, algorithm, searchVal){
  let searchArr = [...arr];
  if(algorithm.name === 'binarySearch'){
    searchArr = sort.quickSort(searchArr);
  }
  let start = now();
  algorithm(searchArr, searchVal);
  return now() - start;
}

function performTimeAnalysis(){
  let analysis = [];

  for(let size of dataSizes){
    let stat = {};
    stat['size'] = size;
    for(let algo of algorithms){
      let newArr = utils.genArray(size);
      let index = Math.floor(Math.random() * size);
      let searchVal = newArr[index];
      stat[algo] = getTimeToSort(newArr, searching[algo], searchVal).toFixed(6);
    }
    analysis.push(stat);
  }
  console.log('SEARCH TIME ANALYSIS');
  console.log('====================');
  console.table(analysis);
}

module.exports = ({
  getTimeToSort,
  performTimeAnalysis
});