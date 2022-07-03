import React, { useState } from "react";
import ProjModal from "../proj-modal/ProjModal";
import { motion } from "framer-motion";

const headerMotion = {
  screenstart: { x: 100 },
  screeninit: { x: 0, transition: { duration: 1 } },
};

const Project = (props) => {
  const [openModal, setOpenModal] = useState(false);
  const details = props.details;

  return (
    <div className="projects_single-container">
      <img
        className="projects_img"
        src={details.img}
        alt="boredApe"
        // onClick={() => setOpenModal(true)}
      />
      <div className="projects_description-wrapper">
        <h3>{details.title}</h3>
        {/* <p>{details.description}</p> */}
        <div>
          <motion.button
            onClick={() => setOpenModal(true)}
            animate={{
              boxShadow: [
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
            transition={{ duration: 1, repeat: Infinity, repeatDelay: 0 }}
            //@dev moving component
            // style when page first loads
            initial={"screenstart"}
            // style while in view
            whileInView={"screeninit"}
            // viewport tru plays multiple times. false play oonce
            viewport={{ once: false, amount: 0.1 }}
            variants={headerMotion}
            className="projects_button"
          >
            More
          </motion.button>
        </div>
      </div>
      <ProjModal
        details={details}
        open={openModal}
        onClose={() => setOpenModal(false)}
      />
    </div>
  );
};

export default Project;
