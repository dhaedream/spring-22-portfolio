import React from "react";

const Navbar = () => {
  return (
    <div className="navbar_container">
      <img src={""} href="#home" />
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
      <div className="logo-container"></div>
    </div>
  );
};

export default Navbar;
