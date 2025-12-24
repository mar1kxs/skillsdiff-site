import React from "react";
import "../styles/otherdota.css";
import zombie from "../assets/other-zombie.png";
import invoker from "../assets/other-invoker.png";

const OtherDota = () => {
  return (
    <section className="other-dota">
      <h3>
        Другие услуги <span style={{ color: "#FF6C32" }}>SkillsDiff</span>
      </h3>
      <ul className="other-dota-list">
        <li>
          <div className="other-header">
            <div className="info-container">
              <h4>
                <span style={{ color: "#FF6C32" }}>Анализ игры</span> в Dota 2
              </h4>
              <p>Глубокий разбор твоей игры с тренером</p>
              <span className="span-first">799 ₽</span>
              <span className="span-last">1599 ₽</span>
              <button className="other-btn">Оплатить</button>
            </div>
            <img src={zombie} alt="zombie icon" />
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
        <li>
          <div
            className="other-header"
            style={{ background: "linear-gradient(140deg,#835F2A, #8C2D28)" }}
          >
            <div className="info-container">
              <h4>
                <span style={{ color: "#FF6C32" }}>Party-игры</span> с тренером
              </h4>
              <p>Глубокий разбор твоей игры с тренером</p>
              <span className="span-first">799 ₽</span>
              <span className="span-last">3199 ₽ </span>
              <button className="other-btn">Оплатить</button>
            </div>
            <img src={invoker} alt="invoker icon" />
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
      </ul>
    </section>
  );
};

export default OtherDota;
