import React, { useState } from "react";
import ProjModal from "../proj-modal/ProjModal";
import { motion } from "framer-motion";

const Project = (props) => {
  const [openModal, setOpenModal] = useState(false);
  const details = props.details;
  return (
    <div className="projects_single-container">
      <img
        className="projects_img"
        src={details.img}
        alt="boredApe"
        onClick={() => setOpenModal(true)}
      />
      <div className="projects_description-wrapper">
        <h3>{details.title}</h3>
        {/* <p>{details.description}</p> */}
        <motion.button
          animate={{ color: "white" }}
          onClick={() => setOpenModal(true)}
          className="projects_button"
        >
          More
        </motion.button>
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
