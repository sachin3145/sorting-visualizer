function ArrayBar(props) {
    const barStyle = {width: "2px", height: props.height, backgroundColor: props.color };
    return (<div className="ArrayBar" style={barStyle}></div>)
}

export default ArrayBar;