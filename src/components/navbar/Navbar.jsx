import React from "react";
import "./navbar.css";
import ddLogo from "../../assets/dd-logo.png";
import disLogo from "../../assets/discord-logo.png";
import gitLogo from "../../assets/github-logo.png";
import linLogo from "../../assets/linkedin-logo.png";

// LogoLinkedin, LogoDiscord

const Navbar = () => {
  return (
    <div className="navbar_container">
      <img alt="home" src={ddLogo} href="home" id="ddLogo" />
      <div className="navbar_links-container">
        <p className="navbar_link">
          <a href="#about">ABOUT</a>
        </p>
        <p className="navbar_link">
          <a href="#skills">SKILLS</a>
        </p>
        <p className="navbar_link">
          <a href="#projects">PROJECTS</a>
        </p>
        <p className="navbar_link">
          <a href="#contact">CONTACT</a>
        </p>
      </div>
      <div className="navbar_logo-container">
        <a
          href="https://linkedin.com/in/dhaesha"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linLogo} alt="logo" />
        </a>
        <a
          href="https://discord.com/users/961022680776196106"
          target="_blank"
          rel="noreferrer"
        >
          <img src={disLogo} alt="logo" />
        </a>
        <a href="https://github.com/dhaedream" target="_blank" rel="noreferrer">
          <img src={gitLogo} alt="logo" />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
