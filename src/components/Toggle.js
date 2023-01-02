import React, { useState } from "react";

function Toggle() {
  let [isOn, roshel] = useState(false)
  function handleClick() {
    roshel((isOn) => !isOn); 
  }
  const color = isOn ? "red" : "white"
  return <button style = {{background : color}} onClick={handleClick}> {isOn ? "ON" : "OFF"} </button>;
}

export default Toggle;
