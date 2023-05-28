import {
  changeColor,
  swapArrayValues,
  updateArrayValue,
  genNewArray,
} from "./utility";
import {
  useArray,
  useArrayUpdate,
  useColorArrayUpdate,
  useColorArray,
} from "./ArrayContext";
import {
  getBubbleSortAnimations,
  getHeapSortAnimations,
  getInsertionSortAnimations,
  getMergeSortAnimations,
  getQuickSortAnimations,
  getSelecttionSortAnimations,
  getShellSortAnimations,
} from "./sortingAlgorithms";
import { COLOR, DELAY } from "./constants";
import { useState } from "react";

function NavBar() {
  const setArray = useArrayUpdate();
  const array = useArray();
  const setColorArray = useColorArrayUpdate();
  const colorArray = useColorArray();
  const [fast, setSpeed] = useState(true);
  async function animate(animations, delay) {
    let myArray = array.slice();
    let myColorArray = colorArray.slice();
    for (let i = 0; i < animations.length; ++i) {
      const animationElement = animations[i];
      if (animationElement.type === "comp") {
        await changeColor(
          myColorArray,
          animationElement.first,
          animationElement.second,
          setColorArray,
          COLOR.ACTIVE,
          fast ? DELAY.FAST : DELAY.SLOW
        );
      } else if (animationElement.type === "swap") {
        myArray = await swapArrayValues(
          myArray,
          animationElement.first,
          animationElement.second,
          setArray,
          delay
        );
      } else if (animationElement.type === "update") {
        myArray = await updateArrayValue(
          myArray,
          animationElement.index,
          animationElement.val,
          setArray,
          delay
        );
      }
    }
    setColorArray(Array(array.length).fill(COLOR.PASSIVE));
    document.getElementById("NavBar").style.display = "flex";
    document.getElementById("header").style.display = "none";
  }

  function callAnimate(f) {
    const obj = f(array.slice());
    document.getElementById("header").textContent = obj.name;
    document.getElementById("NavBar").style.display = "none";
    document.getElementById("header").style.display = "flex";
    const delay = obj.delay;
    const animations = obj.animations;
    animate(animations, delay);
  }

  return (
    <div>
      <div id="header"></div>
      <nav id="NavBar">
        <button
          id="genNewArray"
          onClick={() => {
            genNewArray(setArray);
          }}
        >
          Generate New Array
        </button>
        <button
          id="selectionSort"
          onClick={() => {
            callAnimate(getSelecttionSortAnimations);
          }}
        >
          Selection Sort
        </button>
        <button
          id="bubbleSort"
          onClick={() => {
            callAnimate(getBubbleSortAnimations);
          }}
        >
          Bubble Sort
        </button>
        <button
          id="insertionSort"
          onClick={() => {
            callAnimate(getInsertionSortAnimations);
          }}
        >
          Insertion Sort
        </button>
        <button
          id="shellSort"
          onClick={() => {
            callAnimate(getShellSortAnimations);
          }}
        >
          Shell Sort
        </button>
        <button
          id="mergeSort"
          onClick={() => {
            callAnimate(getMergeSortAnimations);
          }}
        >
          Merge Sort
        </button>
        <button
          id="quickSort"
          onClick={() => {
            callAnimate(getQuickSortAnimations);
          }}
        >
          Quick Sort
        </button>
        <button
          id="heapSort"
          onClick={() => {
            callAnimate(getHeapSortAnimations);
          }}
        >
          Heap Sort
        </button>
        <button
          id="toggleSpeed"
          onClick={() => {
            setSpeed(!fast);
          }}
        >
          {fast ? "SLOW DOWN" : "SPEED UP"}
        </button>
      </nav>
    </div>
  );
}

export default NavBar;
