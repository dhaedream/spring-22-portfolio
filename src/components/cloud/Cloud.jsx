import React from "react";
import "./cloud.css";
import cloud from "../../assets/ty-cloud-dark.png";

const Cloud = () => {
  return (
    <div className="cloud_container">
      {/* <div className="cloud_wrap"> */}
      <img alt="cloud" className="cloud_img" src={cloud} />
      {/* </div> */}
    </div>
  );
};

export default Cloud;
