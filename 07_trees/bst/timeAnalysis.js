const cTable = require('console.table');
const now = require('performance-now');

const BTSModule = require('.');

const dataSizes = [5, 10, 20, 40, 80, 160, 320, 640, 1280, 2560, 5120, 10240, 20480];

let forest = [];
let statistics = [];

function insertNodes(tree, nodeCount){
  let start = now();
  for(let j = 0; j < nodeCount; j++){
    tree.insert(Math.floor(Math.random() * 10000));
  }
  return now() - start;
}

function searchTonull(tree){
  let start = now();
  tree.search(676576756487);
  return now() - start;
}

function getMax(tree){
  let start = now();
  tree.max();
  return now() - start;
}

function getMin(tree){
  let start = now();
  tree.min();
  return now() - start;
}

function makeTrees(){
  for(let i = 0; i < dataSizes.length; i++){
    let tree = new BTSModule.BST();
    let stats = {};
    stats['size'] = dataSizes[i];
    stats['insertTime'] = insertNodes(tree, dataSizes[i]).toFixed(6);
    stats['searchToNull'] = searchTonull(tree).toFixed(6);
    stats['getMax'] = getMax(tree).toFixed(6);
    stats['getMin'] = getMin(tree).toFixed(6);
    statistics.push(stats);
    forest.push(tree);
  }
  console.log('BINARY SEARCH TREE ANALYSIS');
  console.log('===========================');
  console.table(statistics);  
}

makeTrees();

