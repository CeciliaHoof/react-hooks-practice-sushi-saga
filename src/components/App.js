import React, { useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [ sushiList, setSushiList ] = useState([])
  const [ sushiEaten, setSushiEaten ] = useState([])

  useEffect(() => {
    fetch(API)
      .then(r => r.json())
      .then(d => setSushiList(d))
  }, [])

  const eatSushi = (sushi) => {
    setSushiEaten([...sushiEaten, sushi])
  }

  return (
    <div className="app">
      <SushiContainer sushi={sushiList} eat={eatSushi}/>
      <Table plates={sushiEaten}/>
    </div>
  );
}

export default App;