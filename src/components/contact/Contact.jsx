import React from "react";
import "./contact.css";
import targetIcon from "../../assets/contact-location.png";
import avatar from "../../assets/contact-avatar.png";
import phone from "../../assets/contact-phone.png";
import github from "../../assets/contact-github.png";
import linkedin from "../../assets/contact-linkedin.png";

const Contact = () => {
  return (
    <div id="contact" className="contact">
      {/* Will make seprate cloud component */}
      {/* <div className="contact_cloud">
        <img className="contact_cloud-img" src={cloud} />
      </div> */}
      <div className="contact_card">
        {/* <div className="contact_open-span">
          <span className="contact_span-1">OPEN</span>
          <span className="contact_span-2">TO CONNECT</span>
        </div> */}
        <div className="contact_card-content-wrapper">
          <div className="contact_card-main">
            <div className="contact_card-row-wrap">
              <div className="contact_card-row">
                <img className="" src={avatar} />
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
                <img className="" src={phone} />
                <span>202-500-5721</span>
              </div>
            </div>
            <div className="contact_card-row-wrap">
              <div className="contact_card-row">
                <img className="" src={github} />
                <span>Github</span>
              </div>
            </div>
            <div className="contact_card-row-wrap">
              <div className="contact_card-row">
                <img className="" src={linkedin} />
                <span>LinkedIn</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
