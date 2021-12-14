import React, { useState, useEffect } from "react";

import "./Main.scss";

import instagramLogo from "../assets/owner/instagram.png";
import twitterLogo from "../assets/owner/twitter.png";
import moreIcon from "../assets/owner/more.png";

const Main = ({ selectedPunk, punkListData }) => {
  const [activePunk, setActivePunk] = useState(punkListData[0]);

  useEffect(() => {
    setActivePunk(punkListData[selectedPunk]);
  }, [punkListData, selectedPunk]);

  return (
    <div className="main">
      <div className="mainContent">
        <div className="punkHighlight">
          <div className="punkContainer">
            <img
              src={activePunk.image_original_url}
              className="selectedPunk"
              alt=""
            />
          </div>
        </div>
        <div className="punkDetails" style={{ color: "#fff" }}>
          <div className="title">
            {activePunk.name}
            <span className="itemNumber"> .# {activePunk.token_id}</span>
          </div>
          <div className="owner">
            <div className="ownerImageContainer">
              <img
                src={
                  "https://ipfs.thirdweb.com/ipfs/bafybeigqkficum3anns36jid3dxvc4yfauyuvqjulbg43n23qxn3ce3tyu"
                }
                className="selectedPunk"
                alt=""
              />
            </div>
            <div className="ownerDetails">
              <div className="ownerNameHandle">
                <div>{activePunk.owner.address}</div>
                <div className="ownerHandle">@riteshbenjwal</div>
              </div>
              <div className="ownerlink">
                <img src={instagramLogo} alt="" />
              </div>
              <div className="ownerlink">
                <img src={twitterLogo} alt="" />
              </div>
              <div className="ownerlink">
                <img src={moreIcon} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
