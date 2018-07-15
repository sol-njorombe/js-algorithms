class Stack{
  constructor(){
    this.store = [];
  }

  push(val){
    this.store.push(val);
  }

  pop(){
    this.store.pop();
  }

  peek(){
    return this.store[this.store.length - 1];
  }

  size(){
    return this.store.length;
  }
}

module.exports = {
  Stack
}