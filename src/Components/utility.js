function random(start, end) {
    return start+Math.floor(Math.random() * (end-start) + 1);
}

function isSorted(array) {
    for (let i = 0; i < array.length-1; ++i){
        if (array[i] > array[i + 1]) return false;
    }
    return true;
}

function getArray(size, max, min) {
    // returns a new array of specified size whose values lie b/w max and min
    const arr = [];
    for (let index = 0; index < size; index++) {
        arr.push(random(max, min));
    }
    return arr;
}

function areEqual(array1, array2) {
    for (let i = 0; i < array1.size; ++i){
        if (array1[i] !== array2[i]) return false;
    }
    return true;
}

function testSortingAlgorithm(algo, array) {
    return areEqual(
      algo(array).resultantArray,
      array.sort((a, b) => a - b)
    );
}

export {getArray, isSorted, areEqual, testSortingAlgorithm};