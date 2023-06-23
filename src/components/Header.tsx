import React, { useState } from "react";
import "./Header.sass";

const Header: React.FC = () => {
  const [classe, setClasse] = useState("headerHomeR");
  function toggleMenu() {
    if (classe == "headerHomeR") {
      setClasse(classe + " active");
    } else{
      setClasse("headerHomeR");
    }
  }
  return (
    <>
      <header className="headerHome">
        <nav className="navHome">
          <ul className="ulNav">
            <li>
              <a href="#Home">Home</a>
            </li>
            <li>
              <a href="#WhoWeAre">Quem Somos</a>
            </li>
            <li>
              <a href="#History">História</a>
            </li>
            <li>
              <a href="#BeADonor">Seja um doador</a>
            </li>
            <li>Projetos</li>
            <li>
              <a href="#Supporters">Apoiadores</a>
            </li>
            <li>
              <a href="#ContactUs">Fale Conosco</a>
            </li>
          </ul>
        </nav>
      </header>
      <button className="headerBurger" onClick={toggleMenu}>
        <img src="/menu.png" alt="Logo menu Hamburguer" width="40px" />
      </button>
      <header className={classe}>
        <nav className="navHome">
          <ul className="ulNav">
            <li>
              <a href="#Home" onMouseDown={toggleMenu}>Home</a>
            </li>
            <li>
              <a href="#WhoWeAre" onMouseDown={toggleMenu}>Quem Somos</a>
            </li>
            <li>
              <a href="#History" onMouseDown={toggleMenu}>História</a>
            </li>
            <li>
              <a href="#BeADonor" onMouseDown={toggleMenu}>Seja um doador</a>
            </li>
            <li>
              <a onMouseDown={toggleMenu}>Projetos</a>
            </li>
            <li>
              <a href="#Supporters" onMouseDown={toggleMenu}>Apoiadores</a>
            </li>
            <li>
              <a href="#ContactUs" onMouseDown={toggleMenu}>Fale Conosco</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export { Header };
