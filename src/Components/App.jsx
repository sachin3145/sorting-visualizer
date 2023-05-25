import React from "react";
import ArrayContainer from "./ArrayContainer";
import NavBar from "./Controls";
import {ArrayProvider} from "./ArrayContext";

function App() {
  return (
    <div id="App">
      <ArrayProvider>
        <NavBar />
        <ArrayContainer />
      </ArrayProvider>
    </div>
  );
}

export default App;
