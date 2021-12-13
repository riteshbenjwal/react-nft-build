import {useState, useEffect} from 'react';
import "./App.css";
import Header from "./components/Header";
import CollectionCard from "./components/CollectionCard";




function App() {


  return (
    <div className="app">
      <Header />
      <CollectionCard
        id={0}
        name={"Bandana Punk"}
        traits={[
          {
            value: 7,
          },
        ]}
        image="https://nftlabs.mypinata.cloud/ipfs/bafybeigqkficum3anns36jid3dxvc4yfauyuvqjulbg43n23qxn3ce3tyu"
      />
    </div>
  );
}

export default App;
