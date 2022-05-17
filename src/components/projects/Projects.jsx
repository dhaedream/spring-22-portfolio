import React from "react";
import "./projects.css";
import codeProject from "../../assets/solidity-code.png";
import boredApe from "../../assets/bored-ape.png";
import nft from "../../assets/nft.png";
import land from "../../assets/land.png";
import { motion } from "framer-motion";

const headerMotion = {
  screenstart: { y: -300 },
  screeninit: { y: 0, transition: { duration: 1.5 } },
};

const Projects = () => {
  return (
    <div className="projects">
      {/* <h1 className="projects_header">PROJECTS</h1> */}
      <div className="projects_outer-container">
        <motion.h1
          // style when page first loads
          initial={"screenstart"}
          // style while in view
          whileInView={"screeninit"}
          // viewport tru plays multiple times. false play oonce
          viewport={{ once: false, amount: 0.1 }}
          variants={headerMotion}
          className="projects_header"
        >
          PROJECTS
        </motion.h1>

        <div className="projects_row-container">
          <div className="projects_single-container">
            <img className="projects_img" src={boredApe} />
            <div className="projects_description-wrapper">
              <h3>BORED APE CLONE</h3>
              <p>
                This is a clone of a very popular NFT website. Built using
                React, just like this website;-)
              </p>
            </div>
          </div>
          <div className="projects_single-container">
            <img className="projects_img" src={nft} />
            <div className="projects_description-wrapper">
              <h3>MINTING DAPP</h3>
              <p>
                Users will be able to create/buy/sell custom Ethereum NFT's.
                Currently working on Smart Contracts and front end.
              </p>
            </div>
          </div>
        </div>
        <div className="projects_row-container">
          <div className="projects_single-container">
            <img className="projects_img" src={land} />
            <div className="projects_description-wrapper">
              <h3>PROPERTY NFT-VERSE</h3>
              <p>
                Users will be able to create/buy/sell NFT real-estate in a 3D
                Metaverse. Currently Troubleshooting Land smart contract.
              </p>
            </div>
          </div>
          <div className="projects_single-container">
            <img className="projects_img" src={codeProject} />
            <div className="projects_description-wrapper">
              <h3>SMART CONTRACTS</h3>
              <p>
                With a nice understanding of the blockchain, I have been coding
                Smart Contracts using solidity on test networks.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <button className="projects_button">PROJECTS</button> */}
    </div>
  );
};

export default Projects;
