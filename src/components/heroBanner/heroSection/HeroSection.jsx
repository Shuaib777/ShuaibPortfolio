import React from "react";
import "./style.scss";
import scroll from "../../../assets/scroll.png";
import { motion } from "framer-motion";

const HeroSection = () => {
  const heroVariant = {
    initial: {
      opacaity: 0,
      scale: 0,
      transition: {
        duration: 1,
      },
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
      },
    },
  };
  return (
    <div className="heroSection">
      {/* <div className="imageContainer">
        <img src={HeroImage} />
      </div> */}
      <motion.div
        className="content"
        variants={heroVariant}
        initial="initial"
        animate="animate"
      >
        <div className="name">Shuaib</div>
        <div className="proffession">FullStack Developer</div>
        <div className="buttons">
          <a href="#Projects">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Projects
            </motion.button>
          </a>
          <a href="#Contact">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="contactButton"
            >
              Contact
            </motion.button>
          </a>
        </div>
        <motion.div
          className="scrollButton"
          animate={{ opacity: 0, y: 20 }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
        >
          <a href="#Contact">
            <img src={scroll} />
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
