import React, { useRef } from "react";
import "./App.scss";
import HeroBanner from "./components/heroBanner/HeroBanner";
import Parallax from "./components/parallax/Parallax";
import Projects from "./components/projects/Projects";
import Contact from "./components/contacts/Contacts";

const App = () => {
  return (
    <div>
      <section id="Home">
        <HeroBanner />
      </section>
      <section id="Projects">
        <Parallax />
      </section>
      <section>
        <Projects />
      </section>
      {/* <section>Portofolio2</section>
      <section>Portofolio3</section> */}
      <section id="Contact">
        <Contact />
      </section>
      {/* <section>
        <Practice></Practice>
      </section> */}
    </div>
  );
};

export default App;
