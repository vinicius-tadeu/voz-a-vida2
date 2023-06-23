import React from "react";
import logo from "/Logo.png";
import "./Home.sass";
import { Separator } from "./Separator";

const Home: React.FC = () => {
  return (
    <>
      <section className="sectionHome" id="Home">
        <div className="wrapperHome">
          <img src={logo} alt="Logo" />
          <h1 className="h1Home">
            <span className="letterI-orange">I</span>nstituto
            <br />
            <span className="letterV-blue">V</span>oz à&nbsp;
            <span className="letterV-green">V</span>ida&nbsp;
          </h1>
          <div className="separatorH1R"></div>
        </div>
      </section>
      <div className="balls">
        <div className="ball yellow"></div>
        <div className="ball purple"></div>
        <div className="ball blue"></div>
        <div className="ball orange"></div>
        <div className="ball green"></div>
        <div className="ball rose"></div>
      </div>
    </>
  );
};

export { Home };
