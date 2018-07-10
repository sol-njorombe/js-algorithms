const cTable = require('console.table');
const now = require('performance-now');
const utils = require('../arrayUtilities');

const sorting = require('.');

const dataSizes = [5, 10, 20, 40, 80, 160, 320, 640, 1280, 2560, 5120, 10240, 20480];
const algorithms = Object.keys(sorting);

function getTimeToSort(arr, algorithm){
  let start = now();
  algorithm(arr);
  return now() - start;
}


function performTimeAnalysis(){
  let analysis = [];

  for(let size of dataSizes){
    let stat = {};
    stat['size'] = size;
    for(let algo of algorithms){
      let newArr = utils.genArray(size);
      stat[algo] = getTimeToSort(newArr, sorting[algo]).toFixed(6);
    }
    analysis.push(stat);
  }
  console.log('SORTING ALGORITHMS ANALYSIS');
  console.log('===========================');
  console.table(analysis);
}

module.exports = ({
  getTimeToSort,
  performTimeAnalysis
});
