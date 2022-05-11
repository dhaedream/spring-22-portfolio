import React from "react";
import "./contact.css";
// import cloud from "../../assets/ty-cloud-dark.png";
import targetIcon from "../../assets/contact-location.png";

const Contact = () => {
  return (
    <div className="contact">
      {/* Will make seprate cloud component */}
      {/* <div className="contact_cloud">
        <img className="contact_cloud-img" src={cloud} />
      </div> */}
      <div className="contact_card">
        <div className="contact_open-span">
          <span className="contact_span-1">OPEN</span>
          <span className="contact_span-2">TO CONNECT</span>
        </div>
        <div className="contact_card-content-wrapper">
          <div className="contact_card-main">
            <div className="contact_card-row-wrap">
              <div className="contact_card-row">
                <img className="" src={targetIcon} />
                <span>Dhaesha Myers</span>
              </div>
            </div>
            <div className="contact_card-row-wrap">
              <div className="contact_card-row">
                <img className="" src={targetIcon} />
                <span>Washington D.C.</span>
              </div>
            </div>
            <div className="contact_card-row-wrap">
              <div className="contact_card-row">
                <img className="" src={targetIcon} />
                <span>202-550-1234</span>
              </div>
            </div>
            <div className="contact_card-row-wrap">
              <div className="contact_card-row">
                <img className="" src={targetIcon} />
                <span>My Github</span>
              </div>
            </div>
            <div className="contact_card-row-wrap">
              <div className="contact_card-row">
                <img className="" src={targetIcon} />
                <span>My LinkedIn</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
