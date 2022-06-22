import React, { useState } from "react";
// import ProjModal from "../proj-modal/ProjModal";

import "./projcont.css";
// import codeProject from "../../assets/solidity-code.png";
// import boredApe from "../../assets/bored-ape.png";
// import nft from "../../assets/nft.png";
// import greeter from "../../assets/greeter.jpg";
import { motion } from "framer-motion";
import Project from "../../components/project/Project";
import ProjectData from "../../components/project/ProjectData";

const headerMotion = {
  screenstart: { y: -300 },
  screeninit: { y: 0, transition: { duration: 1.5 } },
};

const PrCont = () => {
  // const [openModal, setOpenModal] = useState(false);

  return (
    <div id="projects" className="projects">
      {/* <h1 className="projects_header">PROJECTS</h1> */}
      <div className="projects_outer-container">
        <motion.h1
          // blinking functionality
          style={{ fontSize: "3.3rem", padding: "8vh 0 4vh 0" }}
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
          <Project key={0} details={ProjectData[0]} />
          <Project key={1} details={ProjectData[1]} />
        </div>
        <div className="projects_row-container">
          <Project key={2} details={ProjectData[2]} />
          <Project key={3} details={ProjectData[3]} />
        </div>
      </div>
      {/* <ProjModal open={openModal} onClose={() => setOpenModal(false)} /> */}
      {/* <button className="projects_button">PROJECTS</button> */}
    </div>
  );
};

export default PrCont;
