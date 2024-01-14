import React, { useState } from "react";

function Sushi({ sushi, spendMoney, moneyLeft, plateCount, addPlates }) {
  const [isEaten, setIsEaten] = useState(false)

  function eatSushi(){
    if (moneyLeft >= sushi.price){
      spendMoney(sushi)
      setIsEaten(!isEaten)
      const newPlateCount = [...plateCount, sushi]
      addPlates(newPlateCount)
    }
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={eatSushi}>
        {/* Tell me if this sushi has been eaten! */}
        {isEaten ? null : (
          <img
            src={sushi.img_url}
            alt={sushi.name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  );
}

export default Sushi;
