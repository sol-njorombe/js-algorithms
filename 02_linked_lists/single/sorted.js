const NodeModule = require('./node');
let Node = NodeModule.Node;

class List{
  constructor(size){
    this.head = null;
    this.tail = null;
    for(let i = 0; i < size; i++){
      this.insert(Math.floor(Math.random() * 1000));
    }
  }

  insert(val){
    if(!this.head){
      this.head = new Node(val);
      this.tail = this.head;
      return;
    }

    if(this.head.value >= val){
      let newNode = new Node(val);
      newNode.next = this.head;
      this.head = newNode;
      return;
    }

    if(this.tail.value <= val){
      let newNode = new Node(val);
      this.tail.next = newNode;
      this.tail = newNode;
      return;
    }

    this.head.insert(val);
  }

  traverse(node = this.head){
    console.log(node.value);
    if(node.next)
      this.traverse(node.next);
  }

  deleteNode(val){
    this.head.deleteNode(val);
  }
}

let myList = new List(100);
// console.log(myList);
console.log(myList.traverse());
// myList.deleteNode(12);
// console.log(myList.traverse());
