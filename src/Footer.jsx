import React from "react";
import "../src/styles/footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <img src="../src/assets/footerlogo.svg" alt="footer logo" />
        <ul className="footer-list">
          <li>
            <h4>Тренировки</h4>
            <ul className="inside-list">
              <li>
                <a href="#">Dota 2</a>
              </li>
              <li>
                <a href="#">Valorant</a>
              </li>
              <li>
                <a href="#">CS2</a> <span>скоро</span>
              </li>
            </ul>
          </li>
          <li>
            <h4>Наши платформы</h4>
            <ul className="inside-list">
              <li>
                <a href="#">Telegram</a>
              </li>
              <li>
                <a href="#">TikTok</a>
              </li>
              <li>
                <a href="#">Youtube</a>
              </li>
              <li>
                <a href="#">Twitch</a>
              </li>
            </ul>
          </li>
          <li>
            <h4>Условие</h4>
            <ul className="inside-list">
              <li>
                <a href="#">Правила тренировок</a>
              </li>
              <li>
                <a href="#">Договор публичной оферты</a>
              </li>
              <li>
                <a href="#">Политика конфиденциальности</a>
              </li>
            </ul>
          </li>
          <li>
            <h4>Поддержка</h4>
            <ul className="inside-list">
              <li>
                <a href="#">Связаться с нами</a>
              </li>
              <li>
                <a href="#">Онлайн чат</a>
              </li>
              <li>
                <a href="#">Хочу стать тренером</a>
              </li>
              <li>
                <a href="#">Партнерство</a>
              </li>
            </ul>
          </li>
        </ul>
        <p>© 2025 SkillsDiff. Все права защищены.</p>
      </div>
    </footer>
  );
};

export default Footer;
