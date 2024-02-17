import React from "react";
import "./style.scss";
import { motion, spring } from "framer-motion";
import FilmFlareBanner from "../../assets/filmflareBanner.png";
import ChatterBanner from "../../assets/chatterBanner.png";
import ListifyNowBanner from "../../assets/listifyNowBanner.png";
import EWasteBanner from "../../assets/eWasteBanner.png";
import StormyBanner from "../../assets/stormyBanner.png";
import PersonalWebsiteBanner from "../../assets/personalWebsiteBanner.png";

const Projects = () => {
  const projects = [
    {
      name: "FilmFlare",
      url: "https://film-flare-vert.vercel.app/",
      imageURL: FilmFlareBanner,
    },
    {
      name: "Chatter",
      url: "https://chatter-80e4e.web.app/",
      imageURL: ChatterBanner,
    },
    {
      name: "ListifyNow",
      url: "https://shuaib777.github.io/ListifyNow/home/",
      imageURL: ListifyNowBanner,
    },
    {
      name: "Personal Website",
      url: "https://shuaib-portfolio.vercel.app/",
      imageURL: PersonalWebsiteBanner,
    },
    {
      name: "E-waste",
      url: "https://e-waste-71612.web.app/",
      imageURL: EWasteBanner,
    },
    {
      name: "Stormy",
      url: "https://film-flare-vert.vercel.app/",
      imageURL: StormyBanner,
    },
  ];

  const titleVariant = {
    initial: {
      y: 100,
      opacity: 0,
      transition: {
        duration: 0.5,
        delay: 0.5,
      },
    },
    whileInView: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.5,
      },
    },
  };

  const projectVariant = {
    initial: (i) => ({
      x: -100,
      opacity: 0,
      transition: {
        delay: 0.3 * i,
        duration: 0.6,
      },
    }),
    whileInView: (i) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.3 * i,
        duration: 0.6,
      },
    }),
  };

  return (
    <motion.div
      className="projects"
      initial="initial"
      whileInView="whileInView"
      animate="initial"
    >
      <motion.p variants={titleVariant} className="heading">
        Projects
      </motion.p>
      <motion.p variants={titleVariant} className="subheading">
        Here are some recent projects I have worked on
      </motion.p>
      <motion.div className="projectsContainer">
        {projects.map((project, i) => (
          <motion.div
            className="projectBox"
            key={i}
            variants={projectVariant}
            custom={i}
            whileTap={{ scale: 0.9 }}
          >
            <a href={project.url} target="_blank">
              <img src={project.imageURL} />
              <div className="wrapper">
                <div className="projectName">{project.name}</div>
              </div>
            </a>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Projects;
