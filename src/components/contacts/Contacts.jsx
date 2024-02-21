import React, { useRef } from "react";
import "./style.scss";
import { motion } from "framer-motion";
import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const Contacts = () => {
  const formRef = useRef();

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

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_hvbpx8b", "template_4xq4v06", formRef.current, {
      publicKey: "URNdbDJ4HEKhdkSZg",
    });

    e.target.reset();
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
        >
          <motion.div className="item" variants={itemVariant}>
            <div className="modeImage">
              <MdOutlineEmail />
            </div>
            <div className="modeName">Email</div>
            <div className="modeURL">shuaibshaikh179@gmail.com</div>
            <a href="mailto:shuaibshaikh179@gmail.com" target="_blank">
              Send a Message
            </a>
          </motion.div>
          <motion.div className="item" variants={itemVariant}>
            <div className="modeImage">
              <FaLinkedin />
            </div>
            <div className="modeName">LinkedIn</div>
            <div className="modeURL">Shuaib</div>
            <a
              href="https://www.linkedin.com/in/shuaib-ahmed-shaikh-7b2aa5251/"
              target="_blank"
            >
              Send a Message
            </a>
          </motion.div>
          {/* <motion.div className="item" variants={itemVariant}>
            <div className="modeImage">
              <FaWhatsapp />
            </div>
            <div className="modeName">Whatsapp</div>
            <div className="modeURL">+91 123245</div>
            <a
              href="https://api.whatsapp.com/send?phone=+912334565432&text=Hi"
              target="_blank"
            >
              Send a Message
            </a>
          </motion.div> */}
        </motion.div>
        <motion.div
          className="formSection"
          initial="initial"
          whileInView="whileInView"
          animate="initial"
        >
          <motion.form
            ref={formRef}
            onSubmit={sendEmail}
            variants={formVariant}
          >
            <input
              type="text"
              name="name"
              className="name"
              placeholder="Your Name"
            />
            <input
              type="text"
              name="email"
              className="email"
              placeholder="Your Email"
            />
            <textarea
              cols="30"
              name="message"
              rows="10"
              placeholder="Your Message"
            ></textarea>
            <button>Send Message</button>
          </motion.form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contacts;
