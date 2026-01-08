import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./styles/nav.css";

import logo from "./assets/logo.svg";
import navGame from "./assets/nav-game.svg";
import arrow from "./assets/arrow.svg";
import handshake from "./assets/handshake.svg";
import telegram from "./assets/Telegram.svg";
import smile from "./assets/Smile.svg";

import navDotaBg from "./assets/navDota.png";
import navValorantBg from "./assets/navValorant.png";
import navCsBg from "./assets/navCs.png";

const Nav = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  // закрытие по клику вне
  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <nav>
      <div className="nav-container">
        <Link to="/">
          <img src={logo} alt="Skillsdiff Logo" className="logo-nav" />
        </Link>

        <div className="nav-game-container" ref={menuRef}>
          <button
            type="button"
            className={`nav-game ${open ? "active" : ""}`}
            onClick={() => setOpen((prev) => !prev)}
          >
            <img src={navGame} alt="" />
            <span>Выбери игру</span>
            <img src={arrow} alt="" className={open ? "rotated" : ""} />
          </button>

          <ul className={`btn-list ${open ? "open" : ""}`}>
            <li>
              <img src={navValorantBg} alt="Valorant" />
            </li>
            <li>
              <img src={navDotaBg} alt="Dota 2" />
            </li>
            <li>
              <img src={navCsBg} alt="CS2" />
            </li>
          </ul>
        </div>
      </div>

      <ul className="nav-links">
        <li>
          <img src={handshake} alt="" />
          <a href="#">Партнерство</a>
        </li>
        <li>
          <img src={telegram} alt="" />
          <a href="#">Телеграм</a>
        </li>
        <li>
          <img src={smile} alt="" />
          <a href="#">Наши тренеры</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
