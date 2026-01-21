import React from "react";
import bg from "../assets/personal.svg";
import "../styles/personaltrnValo.css";

const PersonalValo = () => {
  return (
    <section className="personal-trainings">
      <h3>
        <span style={{ color: "#FF4350" }}>Индивидуальный</span> коучинг
      </h3>
      <ul className="trainings-list">
        <li className="personal-card-valo">
          <div className="personal-card-valo-heading">
            <h4>1 тренировка</h4>
            <p className="p-first">
              Идеальный выбор, чтобы <br />
              познакомиться с программой 
            </p>
            <p className="p-last">1 тренировка</p>
            <span className="span-first">900 ₽</span>
            <span className="span-last">800 ₽</span>
            <button>Оплатить</button>
          </div>
          <div className="personal-card-valo-footer">
            <ul>
              <li className="checked">Тренировка на выбор</li>
              <li className="checked">Фидбек + задания</li>
              <li className="cross">Поддержка от SkillsDiff</li>
              <li className="cross">Coaching во время игры</li>
              <li className="cross">Играть 1х1 с тренером</li>
            </ul>
          </div>
        </li>
        <li className="personal-card-valo">
          <div className="personal-card-valo-heading start">
            <h4>Пакет Start</h4>
            <p className="p-first">
              Пакет “Start” научит тебя <br /> базовым навыкам игры
            </p>
            <p className="p-last">4 тренировки</p>
            <span className="span-first">3600 ₽</span>
            <span className="span-last">3 100 ₽</span>
            <button>Оплатить</button>
          </div>
          <div className="personal-card-valo-footer">
            <ul>
              <li className="checked">Тренировка на выбор</li>
              <li className="checked">Фидбек + задания</li>
              <li className="checked">Поддержка от SkillsDiff</li>
              <li className="cross">Coaching во время игры</li>
              <li className="cross">Играть 1х1 с тренером</li>
            </ul>
          </div>
        </li>
        <li className="personal-card-valo">
          <div className="personal-card-valo-heading divine">
            <h4>Пакет Divine+</h4>
            <p className="p-first">
              Самая популярная программа <br /> по цене и качествам
            </p>
            <p className="p-last">8 тренировок</p>
            <span className="span-first">7200 ₽</span>
            <span className="span-last">5 800 ₽</span>
            <button>Оплатить</button>
          </div>
          <div className="personal-card-valo-footer">
            <ul>
              <li className="checked">Тренировка на выбор</li>
              <li className="checked">Фидбек + задания</li>
              <li className="checked">Поддержка от SkillsDiff</li>
              <li className="checked">Coaching во время игры</li>
              <li className="cross">Играть 1х1 с тренером</li>
            </ul>
          </div>
        </li>
        <li className="personal-card-valo">
          <div className="personal-card-valo-heading immortal">
            <h4>Пакет Immortal</h4>
            <p className="p-first">
              Самая популярная программа <br /> по цене и качествам
            </p>
            <p className="p-last" style={{ color: "#ff2a38" }}>
              16 тренировок
            </p>
            <span className="span-first">14400 ₽</span>
            <span className="span-last">10 800 ₽</span>
            <button>Оплатить</button>
          </div>
          <div className="personal-card-valo-footer">
            <ul>
              <li className="checked">Тренировка на выбор</li>
              <li className="checked">Фидбек + задания</li>
              <li className="checked">Поддержка от SkillsDiff</li>
              <li className="checked">Coaching во время игры</li>
              <li className="checked">Играть 1х1 с тренером</li>
            </ul>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default PersonalValo;
