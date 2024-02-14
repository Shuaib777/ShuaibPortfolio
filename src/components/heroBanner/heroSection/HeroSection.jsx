import React from "react";
import "./style.scss";
import HeroImage from "../../../assets/hero.png";
import scroll from "../../../assets/scroll.png";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="heroSection">
      <div className="imageContainer">
        <img src={HeroImage} />
      </div>
      <div className="content">
        <div className="name">Shuaib</div>
        <div className="proffession">FullStack Developer</div>
        <div className="buttons">
          <a href="#Services">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Services
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
          <img src={scroll} />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
