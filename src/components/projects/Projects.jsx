import React from "react";
import "./projects.css";
import codeProject from "../../assets/solidity-code.jpeg";

const Projects = () => {
  return (
    <div>
      {/* <h1 className="projects_header">PROJECTS</h1> */}
      <div className="projects_outer-container">
        <h1 className="projects_header">PROJECTS</h1>

        <div className="projects_row-container">
          <div className="projects_single-container">
            <img className="projects_img" src={codeProject} />
            <div className="projects_description-wrapper">
              <h3>SMART CONTRACTS</h3>
              <p>
                Add a little bit of body text. Add a little bit of body text.Add
                a little bit of body text.
              </p>
            </div>
          </div>
          <div className="projects_single-container">
            <img className="projects_img" src={codeProject} />
            <div className="projects_description-wrapper">
              <h3>SMART CONTRACTS</h3>
              <p>
                Add a little bit of body text. Add a little bit of body text.Add
                a little bit of body text.
              </p>
            </div>
          </div>
        </div>
        <div className="projects_row-container">
          <div className="projects_single-container">
            <img className="projects_img" src={codeProject} />
            <div className="projects_description-wrapper">
              <h3>SMART CONTRACTS</h3>
              <p>
                Add a little bit of body text. Add a little bit of body text.Add
                a little bit of body text.
              </p>
            </div>
          </div>
          <div className="projects_single-container">
            <img className="projects_img" src={codeProject} />
            <div className="projects_description-wrapper">
              <h3>SMART CONTRACTS</h3>
              <p>
                Add a little bit of body text. Add a little bit of body text.Add
                a little bit of body text.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
