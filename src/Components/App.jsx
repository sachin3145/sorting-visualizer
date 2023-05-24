import { useState } from "react";
import ArrayContainer from "./ArrayContainer";
import {getArray} from "./utility";
import NavBar from "./Controls";

function App() {
  const [arr, setArray] = useState(
    getArray(Math.floor((0.75 * window.innerWidth) / 4), 20, 65)
  );

  return (
    <div id="App">
      <NavBar genArray={setArray} />
      <ArrayContainer array={arr} />
    </div>
  );
}

export default App;
