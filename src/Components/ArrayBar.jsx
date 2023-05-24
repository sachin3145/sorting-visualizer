function ArrayBar(props) {
    const barStyle = {width: "2px", height: props.height };
    return (<div className="ArrayBar" style={barStyle}></div>)
}

export default ArrayBar;