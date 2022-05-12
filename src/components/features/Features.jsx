import "./feature.css";
import React from "react";
import skillsIcon from "../../assets/light-dark.png";
import fileIcon from "../../assets/file-dark.png";
import techIcon from "../../assets/ether-dark.png";
import cloudIcon from "../../assets/cloud-dark.png";

const Features = () => {
  return (
    <div className="features">
      <div className="features_single-column">
        <img src={skillsIcon} className="features_icon-img" />
        <h3 className="features_header">SKILLSET</h3>
        <p className="features_body-para">
          <p> Team Player </p>
          <p>Self Taught Web Developer</p>
          <p> Blockchain Focused</p>
        </p>
      </div>
      <div className="features_single-column">
        <img src={fileIcon} className="features_icon-img" />
        <h3 className="features_header">BACKGROUND</h3>
        <p className="features_body-para">
          <p>Artist</p>
          <p>5 years of IT Support</p>
          <p>Freelance Graphic Design</p>
        </p>
      </div>
      <div className="features_single-column">
        <img src={techIcon} className="features_icon-img" />
        <h3 className="features_header">TECHNOLOGIES</h3>
        <p className="features_body-para">
          <p>React, HardHat, Truffle, Ethers, Web3</p>
          <p>a little python + DB models</p>
        </p>
      </div>
      <div className="features_single-column">
        <img src={cloudIcon} className="features_icon-img" />
        <h3 className="features_header">MY DREAM</h3>
        <p className="features_body-para">
          <p>Build Metaverses!</p>
          <p>Collaborate on an awesome team</p>
          <p>Become a Web3 Expert</p>
        </p>
      </div>
    </div>
  );
};

export default Features;
