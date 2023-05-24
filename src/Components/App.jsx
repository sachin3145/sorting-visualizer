import { useState } from "react";
import ArrayContainer from "./ArrayContainer";
import {getArray} from "./utility";
import NavBar from "./NavBar";

function App() {
  const [arr, setArray] = useState(
    getArray(Math.floor((0.75 * window.innerWidth) / 4), 20, 65)
  );
  function handleClick() {
    setArray(getArray(Math.floor(0.75 * window.innerWidth / 4), 20, 65));
  }
  return (
    <div id="App">
      <NavBar genArray={handleClick} />
      <ArrayContainer array={arr} />
    </div>
  );
}

export default App;
