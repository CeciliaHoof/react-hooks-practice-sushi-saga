import React, { useState, useEffect } from "react";

function Sushi({ sushi, eat, money }) {
  const { id, name, img_url, price } = sushi;

  const [eaten, setEaten] = useState(false);

  useEffect(() => {
    sushi.eaten ? setEaten(true) : setEaten(false);
  }, [sushi]);

  const eatSushi = () => {
    if (money >= price) {
      setEaten(true);
      fetch(`http://localhost:3001/sushis/${sushi.id}`,{
        method: 'PATCH',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({eaten : true})
      })
      eat(sushi);
    }
  };

  return (
    <div className="sushi">
      <div className="plate" onClick={eatSushi}>
        {/* Tell me if this sushi has been eaten! */}
        {eaten ? null : <img src={img_url} alt={name} width="100%" />}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
