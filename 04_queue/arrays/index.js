class Queue{
  constructor(){
    this.store = [];
  }

  enqueue(val){
    return this.store.push(val);
  }

  dequeue(){
    return this.store.shift();
  }

  size(){
    return this.store.size();
  }
}

module.exports = {
  Queue
};
