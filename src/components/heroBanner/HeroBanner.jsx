import React from "react";
import "./style.scss";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Sidebar from "./sidebar/Sidebar";
import HeroSection from "./heroSection/HeroSection";
import LogoImage from "../../assets/logoImage.jpg";

const HeroBanner = () => {
  return (
    <div>
      <Sidebar></Sidebar>
      <div className="navbar">
        <div className="name">
          <img
            src={LogoImage}
            style={{ height: "30px", borderRadius: "5px" }}
          />
        </div>
        <div className="icons">
          <a href="https://github.com/Shuaib777">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/shuaib-ahmed-shaikh-7b2aa5251/">
            <FaLinkedin />
          </a>
        </div>
      </div>
      <HeroSection />
    </div>
  );
};

export default HeroBanner;
