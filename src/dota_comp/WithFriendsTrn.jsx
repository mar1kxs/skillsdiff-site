import React from "react";
import "../styles/frnds-trn-dota.css";

const WithFriendsTrn = () => {
  return (
    <section className="frnds-trn">
      <h3>
        Тренировки с <span style={{ color: "#FF6C32" }}>друзьями</span>
      </h3>
      <ul className="frnds-list">
        <li className="frnds-card">
          <div className="frnds-card-header">
            <h4>2 человека</h4>
            <p>1 тренировка</p>
            <span className="span-first">1 000 грн</span>
            <span className="span-last">650 грн</span>
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
            <h4>3 человека</h4>
            <p>1 тренировка</p>
            <span className="span-first">1 500 грн</span>
            <span className="span-last">950 грн</span>
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
            <h4>4 человека</h4>
            <p>1 тренировка</p>
            <span className="span-first">2 000 грн</span>
            <span className="span-last">1 100 грн</span>
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
            <h4>Full-stack</h4>
            <p>1 тренировка</p>
            <span className="span-first">2 550 грн</span>
            <span className="span-last">1 250 грн</span>
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
