function Loading(props){
    const show = props.display?"block":"none";
    const styles = {
        width: "100%",
        height:"100%",
        position:"fixed",
        top:0,
        left:0,
        backgroundColor:"#000000",
        opacity:0.8,
        zIndex:100,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: "url(ZKZg.gif)",
        backgroundSize:"80px",
        display:show
    };
    return (<div style={styles}></div>);
}
export default Loading;