import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi"

function SushiContainer({ sushiList, handleMoreClick, sushiStart, spendMoney, moneyLeft, plateCount, addPlates }) {
  return (
    <div className="belt">
      {sushiList.map(sushi => (
        <Sushi key={sushi.id}
          sushi={sushi}
          spendMoney={spendMoney}
          moneyLeft={moneyLeft}
          plateCount={plateCount}
          addPlates={addPlates}
          />
      ))}
      <MoreButton handleClick={handleMoreClick} sushiStart={sushiStart}/>
    </div>
  );
}

export default SushiContainer;
