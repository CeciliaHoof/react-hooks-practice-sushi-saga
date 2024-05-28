import React, { useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushiList, setSushiList] = useState([]);
  const [sushiEaten, setSushiEaten] = useState([]);
  const [budget, setBudget] = useState(100);

  useEffect(() => {
    fetch(API)
      .then((r) => r.json())
      .then((d) => setSushiList(d));
  }, []);

  const eatSushi = (sushi) => {
    if (budget >= sushi.price) {
      const updatedSushi = sushiList.filter(s => s.id !== sushi.id)
      setSushiList([sushi, ...updatedSushi])
      setSushiEaten([...sushiEaten, sushi]);

      setBudget(budget - sushi.price);
    } else {
      console.log("You need more funds!");
    }
  };

  return (
    <div className="app">
      <SushiContainer sushi={sushiList} eat={eatSushi} money={budget} />
      <Table plates={sushiEaten} money={budget} />
    </div>
  );
}

export default App;
