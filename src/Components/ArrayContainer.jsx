import ArrayBar from "./ArrayBar";
import { useArray } from "./ArrayContext";

function renderBar(x, id) {
  return (<ArrayBar key={id} height={String(x) + "vh"} />);
}

function ArrayContainer() { 
  const array = useArray();
  return (
      <div id="ArrayContainer">
            {array.map(renderBar)}
      </div>
    );
}

export default ArrayContainer;