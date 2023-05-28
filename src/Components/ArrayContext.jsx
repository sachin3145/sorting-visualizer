import { getArray, getColorArray } from "./utility";
import React, { useState, useContext } from "react";

const ArrayContext = React.createContext();
const ArrayUpdateContext = React.createContext();
const ColorArrayContext = React.createContext();
const ColorArrayUpdateContext = React.createContext();

export function useArray() {
  return useContext(ArrayContext);
}

export function useArrayUpdate() {
  return useContext(ArrayUpdateContext);
}

export function useColorArray() {
  return useContext(ColorArrayContext);
}

export function useColorArrayUpdate() {
  return useContext(ColorArrayUpdateContext);
}

export function ArrayProvider({ children }) {
  const [arr, setArray] = useState(
    getArray(Math.floor((0.75 * window.innerWidth) / 8), 1, 70)
  );
  const [colorArr, setColorArr] = useState(getColorArray(arr.length));
    return (
      <ArrayContext.Provider value={arr}>
        <ArrayUpdateContext.Provider value={setArray}>
          <ColorArrayContext.Provider value={colorArr}>
            <ColorArrayUpdateContext.Provider value={setColorArr}>
              {children}
            </ColorArrayUpdateContext.Provider>
          </ColorArrayContext.Provider>
        </ArrayUpdateContext.Provider>
      </ArrayContext.Provider>
    );
}
