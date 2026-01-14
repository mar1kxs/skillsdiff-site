import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

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
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuRef = useRef(null);

  const navigate = useNavigate();

  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <nav>
        <div className="nav-container">
          <Link to="/" onClick={() => setMobileOpen(false)}>
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
              <li onClick={() => navigate("/valorant")}>
                <img src={navValorantBg} alt="Valorant" />
              </li>
              <li onClick={() => navigate("/dota2")}>
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

        <button
          type="button"
          className={`nav-burger ${mobileOpen ? "is-open" : ""}`}
          aria-label="Open menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span />
        </button>
      </nav>

      <div
        className={`nav-overlay ${mobileOpen ? "open" : ""}`}
        onClick={closeMobile}
      />

      <aside className={`nav-mobile ${mobileOpen ? "open" : ""}`}>
        <div className="nav-mobile-top">
          <Link to="/" onClick={closeMobile}>
            <img src={logo} alt="Skillsdiff Logo" className="logo-nav" />
          </Link>

          <button type="button" className="nav-close" onClick={closeMobile}>
            ✕
          </button>
        </div>

        <ul className="nav-mobile-links">
          <li onClick={closeMobile}>
            <img src={handshake} alt="" />
            <a href="#">Партнерство</a>
          </li>
          <li onClick={closeMobile}>
            <img src={telegram} alt="" />
            <a href="#">Телеграм</a>
          </li>
          <li onClick={closeMobile}>
            <img src={smile} alt="" />
            <a href="#">Наши тренеры</a>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default Nav;
