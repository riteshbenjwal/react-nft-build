import React from "react";
import punkLogo from "../assets/header/cryptopunk-logo.png";
import searchIcon from "../assets/header/search.png";
import themeSwitchIcon from "../assets/header/theme-switch.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      {/* Container for Image */}
      <div className="logoContainer">
        <img src={punkLogo} className="punkLogo" alt="" />
      </div>

      {/* Container for Search Bar */}
      <div className="searchBar">
        <div className="searchIconContainer">
          <img src={searchIcon} alt="" />
        </div>
        <input
          className="searchInput"
          placeholder="Collection, item or user..."
        />
      </div>

      {/* Container for Header Item */}

      <div className="headerItems">
        <p>Drops</p>
        <p>Marketplace</p>
        <p>Create</p>
      </div>

      {/* Container for Actions */}
      <div className="headerActions">
        <div className="themeSwitchContainer">
          <img src={themeSwitchIcon} alt="" />
        </div>
      </div>

      {/* Container for Button*/}
      <div className="loginButton">GET IN</div>
    </div>
  );
};

export default Header;
