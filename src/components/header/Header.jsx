import React from "react";
import "./header.css";
import bannerImg from "../../assets/banner-dark.png";
import { motion } from "framer-motion";

const headerMotion = {
  screenstart: { y: -300 },
  screeninit: { y: 0, transition: { duration: 1.5 } },
};

const imgMotion = {
  screenstart: { opacity: 0 },
  screeninit: { opacity: 1, transition: { duration: 3 } },
};

const Header = () => {
  return (
    <div className="header_container">
      <div className="header_top">
        <motion.h2
          // style when page first loads
          initial={"screenstart"}
          // style after initial animation
          animate={"screeninit"}
          variants={headerMotion}
        >
          DHAE DREAM
        </motion.h2>
      </div>
      <motion.img
        initial={"screenstart"}
        animate={"screeninit"}
        variants={imgMotion}
        src={bannerImg}
        className="header_banner-img"
      />
    </div>
  );
};

export default Header;
