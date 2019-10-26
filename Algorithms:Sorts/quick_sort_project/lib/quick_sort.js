function quickSort(array) {
    if (array.length <= 1) return array;

    let pivot = array.shift();
    let left = quickSort(array.filter(ele => ele < pivot));
    let right = quickSort(array.filter(ele => ele >= pivot));

    return [...left, pivot, ...right];
}


module.exports = {
    quickSort
};