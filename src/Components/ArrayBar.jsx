function ArrayBar(props) {
    const barStyle = {width: "4px", height: props.height, backgroundColor: props.color};
    return (<div className="ArrayBar" style={barStyle}></div>)
}

export default ArrayBar;