import React from "react";
import "./BeADonor.sass";

// import { Container } from './styles';

const BeADonor: React.FC = () => {
  return (
    <section className="sectionBeADonor" id="BeADonor">
      <div className="ballsDonor">
        <div className="ball orange"></div>
        <div className="ball purple"></div>
      </div>
      <div className="wrapperDonor">
        <h2>Seja um doador</h2>
        <img
          className="donorQR"
          src="/donorqrcode.svg"
          alt="Qr Code para doações"
        />
        <img
          className="airplanesDonor"
          src="/Airplanes.gif"
          alt="Gif de aviões"
        />
      </div>
      <div className="waves">
        <img className="wave1" src="/waves.svg" alt="waves" />
        <img className="wave2" src="/waves.svg" alt="waves" />
      </div>
    </section>
  );
};

export default BeADonor;
