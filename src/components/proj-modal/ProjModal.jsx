import React from "react";
import demo from "../../assets/greeter.png";
import "./projmodal.css";

const ProjModal = ({ open, onClose }) => {
  console.log(`${demo}`);
  if (!open) return null;
  return (
    <div className="modal_overlay">
      <div className="modal_container">
        <img src={demo} alt="" />
        <p onClick={onClose}>X</p>
      </div>
    </div>
  );
};

export default ProjModal;
