import React from "react";
import "./Main.scss";

import instagramLogo from "../assets/owner/instagram.png";
import twitterLogo from "../assets/owner/twitter.png";
import moreIcon from "../assets/owner/more.png";

const Main = () => {
  return (
    <div className="main">
      <div className="mainContent">
        <div className="punkHighlight">
          <div className="punkContainer">
            <img
              src={
                "https://ipfs.thirdweb.com/ipfs/bafybeigqkficum3anns36jid3dxvc4yfauyuvqjulbg43n23qxn3ce3tyu"
              }
              className="selectedPunk"
              alt=""
            />
          </div>
        </div>
        <div className="punkDetails" style={{ color: "#fff" }}>
          <div className="title">
            {" "}
            Bandana Punk
            <span className="itemNumber">#. 3</span>
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
                <div>0xaa7e2B83F7C1a7aD7204DdD1f9AF5F66762b6760</div>
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
