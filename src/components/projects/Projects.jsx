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
    <div id="projects" className="projects">
      {/* <h1 className="projects_header">PROJECTS</h1> */}
      <div className="projects_outer-container">
        <motion.h1
          // blinking functionality
          style={{ fontSize: "3.5rem", padding: "8vh 0 4vh 0" }}
          animate={{
            textShadow: [
              "0 0 4px #fff",
              "0 0 11px #fff",
              "0 0 19px #fff",
              "0 0 40px #0fa",
              "0 0 80px #0fa",
              "0 0 90px #0fa",
              "0 0 100px #0fa",
              "0 0 150px #0fa",
            ],
            opacity: [0.2, 0.5, 1],
          }}
          transition={{ duration: 0.8, repeat: Infinity, repeatDelay: 2.2 }}
          //@dev moving component
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
            <img className="projects_img" src={boredApe} alt="boredApe" />
            <div className="projects_description-wrapper">
              <h3>BORED APE CLONE</h3>
              <p>
                This is a clone of a very popular NFT website. Built using
                React, just like this website;-)
              </p>
            </div>
          </div>
          <div className="projects_single-container">
            <img className="projects_img" src={nft} alt="" />
            <div className="projects_description-wrapper">
              <h3>GREETER DAPP</h3>
              <p>
                Decentralized application built with react and hardhat. Connect,
                update & retrieve data from Goerli testnet.
              </p>
            </div>
          </div>
        </div>
        <div className="projects_row-container">
          <div className="projects_single-container">
            <img className="projects_img" src={land} alt="" />
            <div className="projects_description-wrapper">
              <h3>PROPERTY NFT-VERSE</h3>
              <p>
                Users will be able to create/buy/sell NFT real-estate in a 3D
                Metaverse. Currently Troubleshooting Land smart contract.
              </p>
            </div>
          </div>
          <div className="projects_single-container">
            <img className="projects_img" src={codeProject} alt="codeProject" />
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
