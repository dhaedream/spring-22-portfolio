import React from "react";
import "./header.css";
import bannerImg from "../../assets/banner-dark.png";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <div className="header_container">
      <div className="header_top">
        <motion.h2
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 2 }}
        >
          DHAE DREAM
        </motion.h2>
      </div>
      <img src={bannerImg} className="header_banner-img" />
    </div>
  );
};

export default Header;
