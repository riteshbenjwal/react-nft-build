import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";

import axios from "axios";
import Punklist from "./components/Punklist";
import Main from "./components/Main";

function App() {
  const [punkListData, setPunkListData] = useState([]);

  const [selectedPunk, setSelectedPunk] = useState(0);

  console.log("hi from app ", selectedPunk)

  useEffect(() => {
    const getMyNfts = async () => {
      const openseaData = await axios.get(
        "https://testnets-api.opensea.io/assets?asset_contract_address=0xc6616470527ccE3B507DE0bc742a459d98ed2fAD&order_direction=asc"
      );
      // console.log(openseaData.data.assets);
      setPunkListData(openseaData.data.assets);
    };
    return getMyNfts();
  }, []);

  return (
    <div className="app">
      <Header />
      {punkListData.length > 0 && (
        <>
          <Main punkListData={punkListData} selectedPunk={selectedPunk} />

          <Punklist
            punkListData={punkListData}
            setSelectedPunk={setSelectedPunk}
          />
        </>
      )}
    </div>
  );
}

export default App;
