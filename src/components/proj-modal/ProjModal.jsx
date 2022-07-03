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
          <p className="modal_close" onClick={onClose}>
            X
          </p>
          <div className="modal_feature">
            <img className="modal_img" src={details.img} alt="" />
            <span className="modal_span">
              React, HardHat, Ethers, Solidity, Typescript, Tailwind
            </span>
          </div>

          <div className="modal_content-wrap">
            <h4 className="modal_title">{details.title}</h4>

            <div className="modal_details">
              <p>{details.description}</p>
              <p>{details.details}</p>
            </div>
            <div className="modal_button-wrap">
              <a href={details.glink} target="_blank" rel="noreferrer">
                <div className="modal_button">{"GitHub >"}</div>
              </a>
              <a href={details.dlink} target="_blank" rel="noreferrer">
                <div className="modal_button">{"Website >"}</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjModal;
