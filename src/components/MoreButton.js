import React from "react";

function MoreButton({handleClick, sushiStart}) {
  function newStart(){
    const newStart = sushiStart + 4;
    handleClick(newStart)
  }
  return <button onClick={newStart}>More sushi!</button>;
}

export default MoreButton;
