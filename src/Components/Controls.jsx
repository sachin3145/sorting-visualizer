import { getArray } from "./utility";

function genNewArray(f) {
  f(getArray(Math.floor((0.75 * window.innerWidth) / 4), 20, 65));
}

function NavBar(props) {
    return (
      <nav id="NavBar">
        <button id="genNewArray" onClick={()=>{genNewArray(props.genArray);}}>generateNewArray</button>
      </nav>
    );
}

export default NavBar;