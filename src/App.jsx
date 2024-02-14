import React from "react";
import "./App.scss";
import HeroBanner from "./components/heroBanner/HeroBanner";

const App = () => {
  return (
    <div>
      <section id="Home">
        <HeroBanner />
      </section>
      <section id="Services">Parallax</section>
      <section>Services</section>
      <section id="Portofolio">Parallax</section>
      <section>Portofolio1</section>
      <section>Portofolio2</section>
      <section>Portofolio3</section>
      <section id="Contact">Contact</section>
      {/* <section>
        <Practice></Practice>
      </section> */}
    </div>
  );
};

export default App;
