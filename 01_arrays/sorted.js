class MyArray{
  constructor(size = 0){
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
    if(this.arr.length === 0 || this.arr[0] > val){
      this.arr.unshift(val);
      return;
    }

    if(this.arr[this.arr.length - 1] < val){
      this.arr.push(val);
      return;
    }

    let greater = val;
    for(let i = 0; i < this.arr.length; i++){
      if(this.arr[i] > greater){
        let temp;
        temp = this.arr[i];
        this.arr[i] = greater;
        greater = temp;
      }
    }
    this.arr.push(greater);
  }

  delete(val){
    this.arr.splice(this.arr.indexOf(val), 1);
  }

  successor(val){
    for(let i = 0; i < this.arr.length; i++){
      if(this.arr[i] > val)
        return this.arr[i];
    }

    return null;
  }

  predecessor(val){
    for(let i = this.arr.length - 1; i <= 0; i--){
      if(this.arr[i] < val)
        return this.arr[i];
    }

    return null;
  }

  minimum(){
    return this.arr.length > 0 ? this.arr[0]: null;
  }

  maximum(){
    return this.arr.length > 0 ? this.arr[this.arr.length - 1]: null;
  }
}

let arr = new MyArray();

arr.insert(5);
arr.insert(12);
arr.insert(4);
arr.insert(4);
arr.insert(5);
arr.insert(6);
arr.insert(17);
console.log(arr)
arr.delete(4);
console.log(arr)
