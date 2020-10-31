import React from "react";
import "./Header.css";
import Avatar from "@material-ui/core/Avatar";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img
          className="header__leftLogo"
          src="http://pngimg.com/uploads/twitch/twitch_PNG56.png"
          alt=""
        />
        <h2>Following</h2>
        <h2>Browse</h2>
        <div className="header__verticalLine"></div>
        <h2>Esport</h2>
        <h2>Music</h2>
        <i className="fas fa-ellipsis-h"></i>
      </div>

      <div className="header__center">
        <input type="text" placeholder="Search" />
        <div className="header__centerLogoContainer">
          <i className="fas fa-search"></i>
        </div>
      </div>

      <div className="header__right">
        <div className="header__rightContainer">
          <i className="fas fa-crown"></i>
          <i className="fas fa-inbox"></i>
          <i className="far fa-comments"></i>

          <div className="header__rightBits">
            <i className="fas fa-gem"></i>
            <h4>Get Bits</h4>
          </div>

          <Avatar />
        </div>
      </div>
    </div>
  );
}

export default Header;
