import React from "react";
import "./header.css";
import bannerImg from "../../assets/banner-dark.png";
import { motion } from "framer-motion";

const headerMotion = {
  screenstart: { y: -300 },
  screeninit: { y: 0, transition: { duration: 1.5 } },
};

const Header = () => {
  return (
    <div className="header_container">
      <div className="header_top">
        <motion.h2
          initial={"screenstart"}
          animate={"screeninit"}
          variants={headerMotion}
        >
          DHAE DREAM
        </motion.h2>
      </div>
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3 }}
        src={bannerImg}
        className="header_banner-img"
      />
    </div>
  );
};

export default Header;
