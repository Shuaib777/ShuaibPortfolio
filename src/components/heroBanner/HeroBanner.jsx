import React from "react";
import "./style.scss";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import Sidebar from "./sidebar/Sidebar";
import HeroSection from "./heroSection/HeroSection";

const HeroBanner = () => {
  return (
    <div>
      <Sidebar></Sidebar>
      <div className="navbar">
        <div className="name">Shuaib</div>
        <div className="icons">
          <img src={facebook} />
          <img src={instagram} />
        </div>
      </div>
      <HeroSection />
    </div>
  );
};

export default HeroBanner;
