import React from "react";
import { motion } from "framer-motion";

const Links = ({ setShowSidebar }) => {
  const links = ["Home", "Services", "Portofolio", "Contact"];

  const variants = {
    open: {
      transition: {
        staggerChildren: 0.2,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.1,
        staggerDirection: -1,
      },
    },
  };

  const item = {
    open: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    closed: { x: -100, opacity: 0, scale: 0 },
  };
  return (
    <motion.div className="links" variants={variants}>
      {links.map((link, i) => (
        <motion.a
          href={`#${link}`}
          key={i}
          onClick={() => setShowSidebar(false)}
          variants={item}
          custom={i}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {link}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;
