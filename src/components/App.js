import React, {useState, useEffect} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushiList, setSushiList] = useState([])
  const [sushiStart, setSushiStart] = useState(0)
  const [moneyLeft, setMoneyLeft] = useState(100)
  const [plateCount, setPlateCount] = useState([])
  
  useEffect(()=> {
    fetch(API)
      .then(resp => resp.json())
      .then(data => setSushiList(data.slice(sushiStart, (sushiStart + 4))))
  }, [sushiStart])

  function buySushi(sushi){
    const newMoney = moneyLeft - sushi.price;
    setMoneyLeft(newMoney)
  }

  return (
    <div className="app">
      <SushiContainer
        sushiList={sushiList}
        handleMoreClick={setSushiStart}
        sushiStart={sushiStart}
        spendMoney={buySushi}
        moneyLeft={moneyLeft}
        plateCount={plateCount}
        addPlates={setPlateCount}/>
      <Table wallet={moneyLeft} plates={plateCount}/>
    </div>
  );
}

export default App;
