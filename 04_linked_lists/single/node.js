class Node{
  constructor(value){
    this.value = value;
    this.next = null;
  }

  insert(val){
    if(this.value <= val && this.next.value > val){
      let newNode = new Node(val);
      newNode.next = this.next;
      this.next = newNode;
      return;
    }
    
    return this.next.insert(val);
  }

  deleteNode(val){
    if(this.next && this.next.value === val){
      this.next = this.next.next;
      return;
    }

    if(this.next){
      this.next.deleteNode(val);
      return;
    }
    
    return;
  }
}

// search
// Insert
// delete
// successor
// predecessor
// minimum
// maximum


module.exports = {
  Node
};