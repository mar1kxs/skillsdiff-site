import React from "react";
import "../styles/othervalo.css";
import omen from "../assets/other-omen.png";
import raze from "../assets/other-raze.png";

const OtherValo = () => {
  return (
    <section className="other-valo">
      <h3>
        Другие услуги <span style={{ color: "#FF4350" }}>SkillsDiff</span>
      </h3>
      <ul className="other-valo-list">
        <li className="other-valo-card">
          <div className="other-header">
            <div className="info-container">
              <h4>
                <span style={{ color: "#FF4350" }}>Анализ игры</span> в Valorant
              </h4>
              <p>Глубокий разбор твоей игры с тренером</p>
              <span className="span-first">2000 ₽</span>
              <span className="span-last">1599 ₽</span>
              <button className="other-btn">Оплатить</button>
            </div>
            <img src={omen} alt="omen icon" />
          </div>
          <div className="other-footer">
            <ul>
              <li className="checked">
                Разбор ранней, средней и поздней стадии игры
              </li>
              <li className="checked">
                Анализ ошибок: позиционирование, фарм, коллы, макро <br /> и
                микро моменты
              </li>
              <li className="checked">Индивидуальный план для прокачки</li>
            </ul>
          </div>
        </li>
        <li className="other-valo-card">
          <div
            className="other-header"
            style={{ background: "linear-gradient(140deg,#835F2A, #8C2D28)" }}
          >
            <div className="info-container">
              <h4>
                <span style={{ color: "#FF4350" }}>Party-игры</span> с тренером
              </h4>
              <p>Получайте анализ в реальном времени</p>
              <span className="span-first">4000 ₽</span>
              <span className="span-last">3199 ₽ </span>
              <button className="other-btn">Оплатить</button>
            </div>
            <img src={raze} alt="raze icon" />
          </div>
          <div className="other-footer">
            <ul>
              <li className="checked">5 игр в команде с тренером</li>
              <li className="checked">
                Разбор ошибок и советы прямо <br />в процессе матча
              </li>
              <li className="checked">Анализ общей командной стратегии</li>
            </ul>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default OtherValo;
