

function NavBar(props) {
    return (
      <nav id="NavBar">
        <button onClick={props.genArray}>generateNewArray</button>
      </nav>
    );
}

export default NavBar;