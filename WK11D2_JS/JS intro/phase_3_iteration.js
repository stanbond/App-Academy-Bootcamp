// Array#bubblesort
Array.prototype.bubblesort = function() {
    let sorted_arr = this;
    let sorted = false;

    while (!sorted) {
        sorted = true;
        for (let i = 0; i < this.length - 1; i++) {
            if (sorted_arr[i] > sorted_arr[i + 1]) {
                // let temp = sorted_arr[i];
                // sorted_arr[i] = sorted_arr[i + 1];
                // sorted_arr[i + 1] = temp;
                [sorted_arr[i], sorted_arr[i + 1]] = [sorted_arr[i + 1] ,sorted_arr[i]]
                sorted = false;
            }
        }

    }
    return sorted_arr;
}


// String#substrings
String.prototype.substrings = function() {
    let subs = [];
      for (let start = 0; start < this.length; start++) {
        for (let end = start + 1; end < this.length; end++) {
          subs.push(this.slice(start, end));
        }
      }
  return subs;
}





