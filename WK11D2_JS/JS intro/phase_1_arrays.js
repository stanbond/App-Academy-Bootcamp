// Phase1: Monkey-patch

// Array#uniq
Array.prototype.uniq = function() {
    const uniqArray = [];
    for (let i = 0; i < this.length; i++) {
        if (!uniqArray.includes(this[i])) {
            uniqArray.push(this[i]);
        }
    }
    return uniqArray;
};

// Array#twoSum
Array.prototype.twoSum = function() {
    const pairs = [];   

    for (let i = 0; i < this.length; i++) {
        for (let j = (i + 1); j < this.length; j++) {
            if (this[i] + this[j] === 0) {
                pairs.push([i,j]);
            }
        }
    }
    return pairs;
};

// Array#transpose
Array.prototype.transpose = function() {
    // const transposed_arr = Array.from(
    //     { length: this[0].length },
    //     () => Array.from({ length: this.length })
    // );
    const transposed_arr = Array.from(Array(this.length), () => new Array(this.length));

    for (let row = 0; row < this.length; row++) {
        for (let col = 0; col < this.length; col++) {
            transposed_arr[col][row] = this[row][col];
        }
    }
    return transposed_arr;
};

