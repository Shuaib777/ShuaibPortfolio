import React, { useState } from "react";
import { motion } from "framer-motion";
import "./style.scss";
import Links from "./links/Links";

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const backgroundVariants = {
    open: {
      clipPath: "circle(1200px at 50px 50px)",
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 40,
      },
    },
    closed: {
      clipPath: "circle(30px at 50px 50px)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
        delay: 0.4,
      },
    },
  };

  return (
    <motion.div className="sidebar" animate={showSidebar ? "open" : "closed"}>
      <motion.div className="bg" variants={backgroundVariants}>
        <div className="links">
          <Links setShowSidebar={setShowSidebar} />
        </div>
      </motion.div>
      <button
        className="toggleButton"
        onClick={() => setShowSidebar((prev) => !prev)}
      >
        <svg viewBox="0 0 100 80">
          <motion.rect
            y="0"
            width="100"
            height="15"
            rx="10"
            variants={{
              open: {
                y: 30,
                rotate: -45,
              },
              closed: { y: 0, rotate: 0 },
            }}
            transition={{
              duration: 0.3,
            }}
          ></motion.rect>
          <motion.rect
            y="30"
            width="100"
            height="15"
            rx="10"
            variants={{
              open: {
                opacity: 0,
              },
              closed: {
                opacity: 1,
              },
            }}
            transition={{
              duration: 0.3,
            }}
          ></motion.rect>
          <motion.rect
            y="60"
            width="100"
            height="15"
            rx="10"
            variants={{
              open: {
                y: -30,
                rotate: 45,
              },
              closed: { y: 0, rotate: 0 },
            }}
            transition={{
              duration: 0.3,
            }}
          ></motion.rect>
        </svg>
      </button>
    </motion.div>
  );
};

export default Sidebar;
