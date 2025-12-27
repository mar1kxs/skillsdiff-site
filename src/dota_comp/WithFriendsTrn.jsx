import React from "react";
import "../styles/frnds-trn-dota.css";

const WithFriendsTrn = () => {
  return (
    <section className="frnds-trn">
      <h3>
        Тренировки с <span style={{ color: "#FF6C32" }}>друзьями</span>
      </h3>
      <img src="" alt="" className="frnds-bg zeus" />
      <ul className="frnds-list">
        <li className="frnds-card">
          <div className="frnds-card-header">
            <h4>2 человека</h4>
            <p>1 тренировка</p>
            <span className="span-first">1800 ₽</span>
            <span className="span-last">1200 ₽</span>
            <button>Оплатить</button>
          </div>
          <div className="frnds-card-footer">
            <ul>
              <li className="checked">Тренировка на выбор</li>
              <li className="checked">Поддержка от SkillsDiff</li>
              <li className="checked">Фидбек + задания</li>
            </ul>
          </div>
        </li>
        <li className="frnds-card">
          <div className="frnds-card-header">
            <h4>2 человека</h4>
            <p>1 тренировка</p>
            <span className="span-first">2700 ₽</span>
            <span className="span-last">1650 ₽</span>
            <button>Оплатить</button>
          </div>
          <div className="frnds-card-footer">
            <ul>
              <li className="checked">Тренировка на выбор</li>
              <li className="checked">Поддержка от SkillsDiff</li>
              <li className="checked">Фидбек + задания</li>
            </ul>
          </div>
        </li>
        <li className="frnds-card">
          <div className="frnds-card-header">
            <h4>2 человека</h4>
            <p>1 тренировка</p>
            <span className="span-first">3600 ₽</span>
            <span className="span-last">2000 ₽</span>
            <button>Оплатить</button>
          </div>
          <div className="frnds-card-footer">
            <ul>
              <li className="checked">Тренировка на выбор</li>
              <li className="checked">Поддержка от SkillsDiff</li>
              <li className="checked">Фидбек + задания</li>
            </ul>
          </div>
        </li>
        <li className="frnds-card">
          <div className="frnds-card-header">
            <h4>2 человека</h4>
            <p>1 тренировка</p>
            <span className="span-first">4500 ₽</span>
            <span className="span-last">2250 ₽</span>
            <button>Оплатить</button>
          </div>
          <div className="frnds-card-footer">
            <ul>
              <li className="checked">Тренировка на выбор</li>
              <li className="checked">Поддержка от SkillsDiff</li>
              <li className="checked">Фидбек + задания</li>
            </ul>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default WithFriendsTrn;
