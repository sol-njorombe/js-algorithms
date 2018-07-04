class Node {
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(val){
    if(val < this.value){
      if(this.left)
        this.left.insert(val);
      else
        this.left = new Node(val);
    }else{
      if(this.right)
        this.right.insert(val);
      else
        this.right = new Node(val);
    }
  }

  max(){
    if(!this.right)
      return this;
    return this.right.max();
  }

  min(){
    if(!this.left)
      return this;
    
    return this.left.min();
  }

  inOrderTraversal(){
    if(this.left)
      this.left.inOrderTraversal();
    console.log(this.value);
    if(this.right)
      this.right.inOrderTraversal();
  }

  search(val){
    if(this.value === val)
      return this;
    
    if(val < this.value && this.left)
      return this.left.search(val);
    
    if(val >= this.value && this.right)
      return this.right.search(val);
    
    return null;
  }
}

module.exports = {
  Node
};