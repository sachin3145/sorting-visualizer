import ArrayBar from "./ArrayBar";

function renderBar(x, id) {
  return (<ArrayBar key={id} height={String(x) + "vh"} />);
}

function ArrayContainer(props) { 
    return (
      <div id="ArrayContainer">
            {props.array.map(renderBar)}
      </div>
    );
}

export default ArrayContainer;