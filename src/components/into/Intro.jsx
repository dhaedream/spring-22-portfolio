import React from "react";
import "./intro.css";
import { motion } from "framer-motion";

const helloMotion = {
  screenstart: { y: -200 },
  screeninit: { y: 0, transition: { duration: 1.5 } },
};

const Intro = () => {
  return (
    <div id="about" className="intro_container">
      {/* <motion.h2
        animate={{ color: ["black", "white", "white"] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="intro-header"
      >
        HELLO WORLD
      </motion.h2> */}
      <motion.h2
        className="intro-header"
        style={{ fontSize: "6rem", padding: "8vh 0 4vh 0" }}
        animate={{
          textShadow: [
            "0 0 4px #fff",
            "0 0 11px #fff",
            "0 0 19px #fff",
            "0 0 40px #0fa",
            "0 0 80px #0fa",
            "0 0 90px #0fa",
            "0 0 100px #0fa",
            "0 0 150px #0fa",
          ],
          opacity: [0.2, 0.5, 1],
        }}
        // animate={{
        //   color: ["#EDF0F2", "#5CE1E6", "#FFFFFF"],
        // }}
        transition={{ duration: 0.8, repeat: Infinity, repeatDelay: 1.9 }}
        initial={"screenstart"}
        // style while in view
        whileInView={"screeninit"}
        // viewport tru plays multiple times. false play oonce
        viewport={{ once: false, amount: 0.1 }}
        variants={helloMotion}
      >
        Hello World
      </motion.h2>
      <p className="intro-par">
        MY NAME IS <span>DHAESHA MYERS</span> . I AM A{" "}
        <span>CREATIVE WEB3 DEVELOPER</span> WITH A PASSION FOR ART AND
        TECHNOLOGY. EQUIPPED WITH <span>SOLID FRONT END DEVELOPMENT </span>
        SKILLS, I EXPLORE NEW WAYS TO CONNECT PRETTY WEBSITES TO THE
        <span> ETHEREUM BLOCKCHAIN</span>.
      </p>
    </div>
  );
};

export default Intro;
