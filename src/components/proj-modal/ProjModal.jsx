import React from "react";
import demo from "../../assets/greeter.png";
import "./projmodal.css";

const ProjModal = ({ open, onClose, details }) => {
  console.log(`${details.title}`);
  if (!open) return null;
  return (
    <>
      <div className="modal_overlay">
        <div className="modal_container">
          <img src={details.img} alt="" />
          <p onClick={onClose}>X</p>
        </div>
      </div>
    </>
  );
};

export default ProjModal;
