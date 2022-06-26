import React, { useState } from "react";
import "./navbar.css";
import ddLogo from "../../assets/dd-logo.png";
import disLogo from "../../assets/discord-logo.png";
import gitLogo from "../../assets/github-logo.png";
import linLogo from "../../assets/linkedin-logo.png";
import { Icon } from "react-icons-kit";
// horiz icon
import { more } from "react-icons-kit/ikons/more";
// vert icon
import { more_2 } from "react-icons-kit/ikons/more_2";

const Navbar = () => {
  const [popMenu, setPopMenu] = useState(false);
  const handleMenu = () => {
    setPopMenu(!popMenu);
    console.log("working");
  };

  return (
    <div className="navbar_container">
      <img src={ddLogo} href="home" id="ddLogo" alt="" />

      <div
        className={popMenu ? "navbar_links-closed" : "navbar_links-container"}
      >
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
          <img src={linLogo} alt="" />
        </a>
        <a
          href="https://discord.com/users/961022680776196106"
          target="_blank"
          rel="noreferrer"
        >
          <img src={disLogo} alt="" />
        </a>
        <a href="https://github.com/dhaedream" target="_blank" rel="noreferrer">
          <img src={gitLogo} alt="" />
        </a>
      </div>

      <div className="navbar-menu-container" onClick={handleMenu}>
        {popMenu ? (
          <Icon icon={more} size={28} />
        ) : (
          <Icon icon={more_2} size={28} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
