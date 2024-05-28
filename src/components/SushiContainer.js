import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({ sushi, eat, money }) {
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(4);
  
  const sushiDisplay = sushi
    .slice(start, end)
    .map((s) => <Sushi key={s.id} sushi={s} eat={eat} money={money}/>);

  const handleMoreClick = () => {
    if (end === 100) {
      setStart(0);
      setEnd(4);
    } else {
      setStart(start + 4);
      setEnd(end + 4);
    }
  };

  return (
    <div className="belt">
      {sushiDisplay}
      <MoreButton handleClick={handleMoreClick} />
    </div>
  );
}

export default SushiContainer;
