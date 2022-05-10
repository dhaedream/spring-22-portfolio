import "./feature.css";
import React from "react";
import skillsIcon from "../../assets/light-dark.png";

const Features = () => {
  return (
    <div className="features">
      <div className="features_single-column">
        <img src={skillsIcon} className="features_icon-img" />
        <h3 className="features_header">SKILLSET</h3>
        <p className="features_body-para">
          Add a little bit of body text. Add a little bit of body text. Add a
          little bit of body text. Add a little bit of body text
        </p>
      </div>
      <div className="features_single-column">
        <img src={skillsIcon} className="features_icon-img" />
        <h3 className="features_header">SKILLSET</h3>
        <p className="features_body-para">
          Add a little bit of body text. Add a little bit of body text. Add a
          little bit of body text. Add a little bit of body text
        </p>
      </div>
      <div className="features_single-column">
        <img src={skillsIcon} className="features_icon-img" />
        <h3 className="features_header">SKILLSET</h3>
        <p className="features_body-para">
          Add a little bit of body text. Add a little bit of body text. Add a
          little bit of body text. Add a little bit of body text
        </p>
      </div>
      <div className="features_single-column">
        <img src={skillsIcon} className="features_icon-img" />
        <h3 className="features_header">SKILLSET</h3>
        <p className="features_body-para">
          Add a little bit of body text. Add a little bit of body text. Add a
          little bit of body text. Add a little bit of body text
        </p>
      </div>
    </div>
  );
};

export default Features;
