import React from "react";
import "./projects.css";
import codeProject from "../../assets/solidity-code.jpeg";

const Projects = () => {
  return (
    <div>
      <div className="projects_outer-container">
        <div className="projects_row-container">
          <div className="projects_single-container">
            <img src={codeProject} />
            <h3>SMART CONTRACTS</h3>
            <p>
              Add a little bit of body text. Add a little bit of body text.Add a
              little bit of body text.
            </p>
          </div>
          <div className="projects_single-container">
            <img src={codeProject} />
            <h3>SMART CONTRACTS</h3>
            <p>
              Add a little bit of body text. Add a little bit of body text.Add a
              little bit of body text.
            </p>
          </div>
        </div>
        <div className="projects_row-container">
          <div className="projects_single-container">
            <img src={codeProject} />
            <h3>SMART CONTRACTS</h3>
            <p>
              Add a little bit of body text. Add a little bit of body text.Add a
              little bit of body text.
            </p>
          </div>
          <div className="projects_single-container">
            <img src={codeProject} />
            <h3>SMART CONTRACTS</h3>
            <p>
              Add a little bit of body text. Add a little bit of body text.Add a
              little bit of body text.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
