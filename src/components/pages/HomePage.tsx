import React from "react";
import Welcome from "./homeSections/Welcome";
import About from "./homeSections/About";
import Experience from "./homeSections/Experience";
import Contact from "./homeSections/Contact";
import MyService from "./homeSections/MyService";

const HomePage = () => {
  return (
    <>
      <Welcome />
      <About />
      <MyService/>
      <Experience />
      <Contact />
    </>
  );
};

export default HomePage;
