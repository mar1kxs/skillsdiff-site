import React from "react";
import "../src/styles/footer.css";

import footerLogo from "../src/assets/footerlogo.svg";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <img src={footerLogo} alt="SkillsDiff footer logo" />

        <ul className="footer-list">
          <li>
            <h4>Тренировки</h4>
            <ul className="inside-list">
              <li>
                <a href="#/dota2">Dota 2</a>
              </li>
              <li>
                <a href="#/valorant">Valorant</a>
              </li>
              <li>
                <span>
                  CS2 <em>скоро</em>
                </span>
              </li>
            </ul>
          </li>

          <li>
            <h4>Наши платформы</h4>
            <ul className="inside-list">
              <li>
                <a
                  href="https://t.me/skillsdiff"
                  target="_blank"
                  rel="noreferrer"
                >
                  Telegram
                </a>
              </li>
              <li>
                <a href="#" aria-disabled="true">
                  TikTok
                </a>
              </li>
              <li>
                <a href="#" aria-disabled="true">
                  YouTube
                </a>
              </li>
              <li>
                <a href="#" aria-disabled="true">
                  Twitch
                </a>
              </li>
            </ul>
          </li>

          <li>
            <h4>Условия</h4>
            <ul className="inside-list">
              <li>
                <a href="#/rules">Правила тренировок</a>
              </li>
              <li>
                <a href="#/offer">Договор публичной оферты</a>
              </li>
              <li>
                <a href="#/privacy">Политика конфиденциальности</a>
              </li>
            </ul>
          </li>

          <li>
            <h4>Поддержка</h4>
            <ul className="inside-list">
              <li>
                <a
                  href="https://t.me/skillsdiff"
                  target="_blank"
                  rel="noreferrer"
                >
                  Связаться с нами
                </a>
              </li>
              <li>
                <a href="#" aria-disabled="true">
                  Онлайн чат
                </a>
              </li>
              <li>
                <a href="#/coach">Хочу стать тренером</a>
              </li>
              <li>
                <a href="#/partnership">Партнерство</a>
              </li>
            </ul>
          </li>
        </ul>

        <p style={{ color: "#B9B9B9" }}>
          © 2025 SkillsDiff. Все права защищены.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
