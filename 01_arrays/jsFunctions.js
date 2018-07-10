class MyArray{
  constructor(size){
    this.arr = new Array(size);
    for(let i = 0; i < size; i++){
      this.arr[i] = Math.floor(Math.random() * 10);
    }
  }

  search(val){
    return this.arr.find(element => element === val);
  }

  insert(val){
    this.arr.push(val);
  }

  delete(val){
    this.arr.splice(this.arr.indexOf(val), 1);
  }

  doubles(){
    return this.arr.map( val => val * 2);
  }

  filterGreater(val){
    return this.arr.filter( elem => elem > val)
  }
  
  cummulativeSum(){
    return this.arr.reduce( (sum, elem) => sum + elem );
  }
}
