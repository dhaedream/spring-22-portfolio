import React from "react";
import ddLogo from "../../assets/dd-logo.png";
import disLogo from "../../assets/discord-logo.png";
import gitLogo from "../../assets/github-logo.png";
import linLogo from "../../assets/linkedin-logo.png";

// LogoLinkedin, LogoDiscord

const Navbar = () => {
  return (
    <div className="navbar_container">
      <img src={ddLogo} href="#home" />
      <div className="navbar_links-container">
        <p>
          <a href="#about">ABOUT</a>
        </p>
        <p>
          <a href="#skills">SKILLS</a>
        </p>
        <p>
          <a href="#projects">PROJECTS</a>
        </p>
        <p>
          <a href="#contact">CONTACT</a>
        </p>
      </div>
      <div className="navbar_logo-container">
        <a>
          <img src={linLogo} href="#linkedin" />
        </a>
        <a>
          <img src={disLogo} href="#discord" />
        </a>
        <a>
          <img src={gitLogo} href="#github" />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
