const nodeModule  = require('./node');
let Node = nodeModule.Node;

class BST{
  constructor(){
    this.root = null;
  }

  insert(val){
    if(!this.root){
      this.root = new Node(val);
    }else{
      this.root.insert(val);
    }    
  }

  min(){
    console.log('min node is ',this.root.min().value);
  }

  max(){
    console.log('max node is ', this.root.max().value);
  }

  inOrderTraversal(){
    this.root.inOrderTraversal();
  }

  search(val){
    let found = this.root.search(val);
    if(found)
      console.log('found', found);
    else
      console.log('could not find node');
  }
}


module.exports = {
  BST
};