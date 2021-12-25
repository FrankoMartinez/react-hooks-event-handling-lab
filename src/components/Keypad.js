// Code Keypad Component Here
import React from "react";

function event(){
    console.log("Entering password...")
}

function Keypad(){
    return (
        <input type="password" onChange={event}/>
    )
}

export default Keypad