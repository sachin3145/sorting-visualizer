import { COLOR } from "./constants";

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

function genNewArray(f) {
  f(getArray(Math.floor((0.75 * window.innerWidth) / 8), 1, 70));
}

async function updateArrayValue(array, i, v, f, delay) {
  // can be used to update single of the state array
  let myArr = array.slice();
  myArr[i] = v;
  await f(myArr);
  await waitFor(delay);
  return myArr;
}
async function swapArrayValues(array, i, j, f, delay) {
  // can be used to swap two values in the state array
  let myArr = array.slice();
  [myArr[i], myArr[j]] = [myArr[j], myArr[i]];
  await f(myArr);
  await waitFor(delay);
  return myArr;
}

async function changeColor(array, i, j, f, color, delay) {
  let myArr = array.slice();
  myArr[i] = myArr[j] = color;
  await f(myArr);
  await waitFor(delay);
}

function getColorArray(size) {
    const res = [];
    for (let i = 0; i < size; ++i){
        res.push(COLOR.PASSIVE);
    }
    return res;
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

function waitFor(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("");
    }, ms);
  });
}

function disableButtons(val) {
  const buttons = document.getElementsByTagName("button");
  console.log(buttons);
  for (let i = 0; i < buttons.length; ++i) {
    buttons[i].disabled = val;
  }
}

export {getArray, genNewArray, disableButtons, waitFor, changeColor, swapArrayValues, updateArrayValue,  getColorArray, isSorted, areEqual, testSortingAlgorithm};