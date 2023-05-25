import { getArray } from "./utility";
import React, { useState, useContext } from "react";

const ArrayContext = React.createContext();
const ArrayUpdateContext = React.createContext();

export function useArray() {
  return useContext(ArrayContext);
}

export function useArrayUpdate() {
  return useContext(ArrayUpdateContext);
}

export function ArrayProvider({ children }) {
  const [arr, setArray] = useState(
    getArray(Math.floor((0.75 * window.innerWidth) / 4), 20, 65)
    );

    return (
    <ArrayContext.Provider value={arr}>
      <ArrayUpdateContext.Provider value={setArray}>
        {children}
      </ArrayUpdateContext.Provider>
    </ArrayContext.Provider>
  );
}
