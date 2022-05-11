import React from "react";
import "./projects.css";
import codeProject from "../../assets/solidity-code.jpeg";
import boredApe from "../../assets/bored-ape.png";
import nft from "../../assets/nft.png";

const Projects = () => {
  return (
    <div className="projects">
      {/* <h1 className="projects_header">PROJECTS</h1> */}
      <div className="projects_outer-container">
        <h1 className="projects_header">PROJECTS</h1>

        <div className="projects_row-container">
          <div className="projects_single-container">
            <img className="projects_img" src={boredApe} />
            <div className="projects_description-wrapper">
              <h3>BORED APE CLONE</h3>
              <p>
                This is a clone of a very popualar NFT website. The project was
                built using React and is being hosted on codesandbox.
              </p>
            </div>
          </div>
          <div className="projects_single-container">
            <img className="projects_img" src={nft} />
            <div className="projects_description-wrapper">
              <h3>MINTING APP</h3>
              <p>
                In this decentralized application, users are able to create,
                purchase, and sell custom NFT's on a test blockchain network.
              </p>
            </div>
          </div>
        </div>
        <div className="projects_row-container">
          <div className="projects_single-container">
            <img className="projects_img" src={codeProject} />
            <div className="projects_description-wrapper">
              <h3>PROPERTY NFT METAVERSE</h3>
              <p>
                In this decentralized application, users are able to create,
                purchase, and sell custom NFT's on a test blockchain network.
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
      <button className="projects_button">PROJECTS</button>
    </div>
  );
};

export default Projects;
