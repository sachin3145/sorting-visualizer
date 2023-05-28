import ArrayBar from "./ArrayBar";
import { useArray, useColorArray } from "./ArrayContext";

function renderBar(x, id) {
  return (<ArrayBar key={id} color={x.color}  height={String(x.val) + "vh"} />);
}

function ArrayContainer() { 
  const array = useArray();
  const colors = useColorArray();
  const objectArray = [];
  for (let i = 0; i < array.length; ++i){
    objectArray.push({ val: array[i], color: colors[i] });
  }
  return (
    <div id="ArrayContainer">
      {objectArray.map(renderBar)}
    </div>
  );
}

export default ArrayContainer;