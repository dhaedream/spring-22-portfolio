import React from "react";
import "./header.css";
import bannerImg from "../../assets/banner-dark.png";

const Header = () => {
  return (
    <div className="header_container">
      <div className="header_top">
        <h2>DHAE DREAM</h2>
      </div>
      <img src={bannerImg} className="header_banner-img" />
    </div>
  );
};

export default Header;
