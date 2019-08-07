// Array#myEach
Array.prototype.myEach = function(funct) {
  for (let i = 0; i < this.length; i++) {
    funct(this[i]);
  }
}
 
// Array#myMap
Array.prototype.myMap = function(func) {
    const mapped_arr = [];
    this.myEach( ele => mapped_arr.push(func(ele)) );
    return mapped_arr;
}

// Array#myReduce(callback[, initialValue])
Array.prototype.myReduce = function(func, initialValue) {
    let arr = this;
    if (!initialValue) {
      initialValue = arr[0];
      arr = arr.slice(1);
    }

    this.myEach(el => initialValue = func(initialValue, el));   
    return initialValue;
}