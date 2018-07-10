class MyArray{
  constructor(size){
    this.arr = new Array(size);
    for(let i = 0; i < size; i++){
      this.arr[i] = i * 2;
    }
  }

  search(val, start = 0, end = (this.arr.length - 1)){
    let mid = Math.floor( (start + end) / 2);
    if(val === this.arr[mid])
      return this.arr[mid];
    
    if(val > this.arr[mid] && (mid + 1 <= end))
      return this.search(val, mid + 1, end);
    
    if(val < this.arr[mid] && start <= mid)
      return this.search(val, start, mid);
      
    return null;
  }

  insert(val){

  }

  delete(val){

  }

  successor(val){

  }

  predecessor(val){

  }

  minimum(){

  }

  maximum(){

  }
}
