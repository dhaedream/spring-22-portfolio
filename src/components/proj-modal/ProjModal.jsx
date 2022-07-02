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
              <p>
                Jelly beans dragée cheesecake bear claw tart jelly beans gummies
                I love icing. Cake marshmallow cheesecake wafer I love tootsie
                roll danish I love cotton candy. I love carrot cake bonbon ice
                cream dessert I love tart sesame snaps marzipan.
              </p>
              <p>
                Cupcake ipsum dolor sit amet oat cake. Dragée shortbread oat
                cake sweet gummies tootsie roll toffee. I love marshmallow donut
                gummi bears chocolate cake. Ice cream cake candy canes topping
                cookie bear claw.
              </p>
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
