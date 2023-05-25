import { getArray } from "./utility";
import { useArray, useArrayUpdate } from "./ArrayContext";
function genNewArray(f) {
  console.log(f);
  f(getArray(Math.floor((0.75 * window.innerWidth) / 4), 20, 65));
}

function updateArray(array, i, v, f) {
  // can be used to update single of the state array
  let myArr = array.slice();
  myArr[i] = v;
  f(myArr);
}

function NavBar() {

  const setArray = useArrayUpdate();
  const array = useArray();
    return (
      <nav id="NavBar">
        <button id="genNewArray" onClick={() => { genNewArray(setArray); }}>generateNewArray</button>
        <button id="removeFirstBar" onClick={() => { updateArray(array, 0, 0, setArray) }}>removeFirstBar</button>
      </nav>
    );
}

export default NavBar;