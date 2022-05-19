import "./feature.css";
import React from "react";
import skillsIcon from "../../assets/light-dark.png";
import fileIcon from "../../assets/file-dark.png";
import techIcon from "../../assets/ether-dark.png";
import cloudIcon from "../../assets/cloud-dark.png";

const Features = () => {
  return (
    <div id="skills" className="features">
      <div className="features_single-column">
        <img src={skillsIcon} className="features_icon-img" />
        <div className="features_content-wrapper">
          <h3 className="features_header">SKILLSET</h3>
          <div className="features_body-para">
            <p>Team Player</p>
            <p>Developer/Designer</p>
            <p>Blockchain Junky</p>
          </div>
        </div>
      </div>
      <div className="features_single-column">
        <img src={fileIcon} className="features_icon-img" />
        <div className="features_content-wrapper">
          <h3 className="features_header">BACKGROUND</h3>
          <p className="features_body-para">
            <p>Lifelong Artist</p>
            <p>5 years in IT Support</p>
            <p>Freelance Graphic Design</p>
          </p>
        </div>
      </div>
      <div className="features_single-column">
        <img src={techIcon} className="features_icon-img" />
        <div className="features_content-wrapper">
          <h3 className="features_header">TECHNOLOGIES</h3>
          <p className="features_body-para">
            <p>React, HardHat, Truffle, Ethers, Web3</p>
            <p>a little python + DB models</p>
          </p>
        </div>
      </div>
      <div className="features_single-column">
        <img src={cloudIcon} className="features_icon-img" />
        <div className="features_content-wrapper">
          <h3 className="features_header">MY DREAM</h3>
          <p className="features_body-para">
            <p>Build + Inspire</p>
            <p>Grow Professionally</p>
            <p>Become a Web3 Expert</p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
