import { getArray } from "./utility";
import { useArray, useArrayUpdate } from "./ArrayContext";
import { getBubbleSortAnimations, getHeapSortAnimations, getInsertionSortAnimations, getMergeSortAnimations, getQuickSortAnimations, getSelecttionSortAnimations, getShellSortAnimations } from "./sortingAlgorithms";
function genNewArray(f) {
  f(getArray(Math.floor((0.75 * window.innerWidth) / 4), 20, 65));
}

function updateArrayValue(array, i, v, f) {
  // can be used to update single of the state array
  let myArr = array.slice();
  myArr[i] = v;
  f(myArr);
}

function swapArrayValues(array, i, j, f) {
  // can be used to swap two values in the state array
  let myArr = array.slice();
  [myArr[i], myArr[j]] = [myArr[j], myArr[i]];
  f(myArr);
}

// const asyncWait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function NavBar() {

    const setArray = useArrayUpdate();
    const array = useArray();

  function animate(animations) {
    // add required delay
    for (let i = 0; i < animations.length; ++i){
      if (animations[i].type === "comp") {
        // comp code
      }
      else if (animations[i].type === "swap") {
        swapArrayValues(array, animations[i].first, animations[i].second, setArray);
      }
      else if (animations[i].type === "update") {
        updateArrayValue(
          array,
          animations[i].index,
          animations[i].val,
          setArray
        );
      }
    }
  }



    return (
      <nav id="NavBar">
        <button id="genNewArray" onClick={() => { genNewArray(setArray); }}>generateNewArray</button>
        <button id="selectionSort" onClick={() => { animate(getSelecttionSortAnimations(array).animations) }}>selectionSort</button>
        <button id="bubbleSort" onClick={() => { animate(getBubbleSortAnimations(array).animations) }}>bubbleSort</button>
        <button id="insertionSort" onClick={() => { animate(getInsertionSortAnimations(array).animations) }}>insertionSort</button>
        <button id="shellSort" onClick={() => { animate(getShellSortAnimations(array).animations) }}>shellSort</button>
        <button id="mergeSort" onClick={() => { animate(getMergeSortAnimations(array).animations) }}>mergeSort</button>
        <button id="quickSort" onClick={() => { animate(getQuickSortAnimations(array).animations) }}>quickSort</button>
        <button id="heapSort" onClick={() => { animate(getHeapSortAnimations(array).animations) }}>heapSort</button>
      </nav>
    );
}

export default NavBar;