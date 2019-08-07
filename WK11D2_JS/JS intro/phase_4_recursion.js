// range(start, end)
function range(start, end) {
  if (start === end) {
    return [];
  }
    let arr = range(start, end - 1);
    arr.push(end - 1);
    return arr;
    //extra_credit
    // let arr = range(start + 1, end);
    // arr.push(start+1);
    // return arr;
}


// sumRec(arr)
function sumRec(arr) {
    if (arr.length === 0) {
        return 0;
    }
    let end = arr[arr.length-1];
   return sumRec(arr.slice(0, arr.length -1)) + end;

//    let start = arr[0];
//    return sumRec(arr.slice(1, arr.length)) + start;
}


// exponent(base, exp)
function exp1(base, exponent) {
  return exponent === 0 ? 1 : (base * exp1(base , exponent - 1));   itsss workingggggg woohooo!!!!!! lol
}


// fibonacci(n) [0,1,1,2,3,5]
function fibonacci(n) {
    if (n === 0) {
        return 0;
    }else if (n === 1 || n === 2) {
        return 1;
    }
    
}

// deepDup(arr)