import React from "react";
import { Link } from "react-router-dom";
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
        <Link to="/">
          <img
            src={logo}
            alt="Skillsdiff Logo"
            style={{ cursor: "pointer" }}
            className="logo-nav"
          />
        </Link>

        <div className="nav-game">
          <img src={navGame} alt="navgame icon" />
          <span>Выбери игру</span>
          <img src={arrow} alt="navarrow icon" />
        </div>
      </div>

      <ul className="nav-links">
        <li>
          <img src={handshake} alt="handshake nav" />
          <a href="">Партнерство</a>
        </li>
        <li>
          <img src={telegram} alt="telegram nav" />
          <a href="">Телеграм</a>
        </li>
        <li>
          <img src={smile} alt="smile nav" />
          <a href="">Наши тренеры</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
