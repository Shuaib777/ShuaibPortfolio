import React, { useRef } from "react";
import "./style.scss";
import { motion } from "framer-motion";
import { MdOutlineEmail } from "react-icons/md";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const Contacts = () => {
  const headingVariant = {
    initial: {
      y: 100,
      opacity: 0,
    },
    whileInView: {
      y: 0,
      opacity: 1,
    },
  };
  const itemsVariant = {
    initial: {
      transition: {
        staggerChildren: 0.2,
      },
    },
    whileInView: {
      transition: {
        staggerChildren: 0.3,
      },
    },
    transition: {
      duration: 0.5,
    },
  };
  const itemVariant = {
    initial: {
      x: -100,
      opacity: 0,
    },
    whileInView: {
      x: 0,
      opacity: 1,
    },
  };

  const formVariant = {
    initial: {
      x: 100,
      opacity: 0,
    },
    whileInView: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="contacts">
      <motion.div
        className="heading"
        variants={headingVariant}
        animate="initial"
        initial="initial"
        whileInView="whileInView"
        transition="transition"
      >
        Contact Me
      </motion.div>
      <div className="contactSection">
        <motion.div
          className="modeSection"
          initial="initial"
          whileInView="whileInView"
          animate="initial"
          variants={itemsVariant}
          // viewport={{ root: ref }}
        >
          <motion.div className="item" variants={itemVariant}>
            <div className="modeImage">
              <MdOutlineEmail />
            </div>
            <div className="modeName">Email</div>
            <div className="modeURL">support@gmail.com</div>
            <a href="#">Send a Message</a>
          </motion.div>
          <motion.div className="item" variants={itemVariant}>
            <div className="modeImage">
              <FaFacebookMessenger />
            </div>
            <div className="modeName">Messenger</div>
            <div className="modeURL">Shuaib</div>
            <a href="#">Send a Message</a>
          </motion.div>
          <motion.div className="item" variants={itemVariant}>
            <div className="modeImage">
              <FaWhatsapp />
            </div>
            <div className="modeName">Whatsapp</div>
            <div className="modeURL">+91 123245</div>
            <a href="#">Send a Message</a>
          </motion.div>
        </motion.div>
        <motion.div
          className="formSection"
          initial="initial"
          whileInView="whileInView"
          animate="initial"
        >
          <motion.form variants={formVariant}>
            <input type="text" className="name" placeholder="Your Name" />
            <input type="text" className="email" placeholder="Your Email" />
            <textarea cols="30" rows="10" placeholder="Your Message"></textarea>
            <button>Send Message</button>
          </motion.form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contacts;
