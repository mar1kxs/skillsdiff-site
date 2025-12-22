import React from "react";
import "./styles/nav.css";

import logo from "./assets/logo.svg";
import navGame from "./assets/nav-game.svg";
import arrow from "./assets/arrow.svg";
import handshake from "./assets/handshake.svg";
import telegram from "./assets/Telegram.svg";
import smile from "./assets/Smile.svg";

const Nav = () => {
  return (
    <nav>
      <div className="nav-container">
        <a href="/">
          <img src={logo} alt="Skillsdiff Logo" style={{ cursor: "pointer" }} />
        </a>

        <div className="nav-game">
          <img src={navGame} alt="navgame icon" />
          Выбери игру
          <img src={arrow} alt="navarrow icon" />
        </div>
      </div>

      <ul className="nav-links">
        <li>
          <img src={handshake} alt="handshake nav" />
          Партнерство
        </li>
        <li>
          <img src={telegram} alt="telegram nav" />
          Телеграм
        </li>
        <li>
          <img src={smile} alt="smile nav" />
          Наши тренеры
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
