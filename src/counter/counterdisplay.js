import React from "react";
// internal style 
const spanstyle={backgroundColor:"green",color:"white",width:"450px",fontFamily:"fantasy",fontSize:"50px"}

function CounterDisplay(props)
{
    return(
        
        <span style={spanstyle}>{props.count}</span>
    )
}

export default CounterDisplay