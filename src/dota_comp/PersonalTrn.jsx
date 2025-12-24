import React from "react";
import bg from "../assets/personal.svg";
import "../styles/personaltrnDota.css";

const PersonalTrn = () => {
  return (
    <section className="personal-trainings">
      <img src={bg} alt="Personal background" className="personal-trn-bg" />
      <h3>
        <span style={{ color: "#FF6C32" }}>Индивидуальный</span> коучинг
      </h3>
      <ul className="trainings-list">
        <li className="personal-card-dota">
          <div className="personal-card-dota-heading">
            <h4>1 тренировка</h4>
            <p className="p-first">
              Идеальный выбор, чтобы <br />
              познакомиться с программой 
            </p>
            <p className="p-last">1 тренировка</p>
            <span className="span-first">799 ₽</span>
            <span className="span-last">799 ₽</span>
            <button>Оплатить</button>
          </div>
          <div className="personal-card-dota-footer">
            <ul>
              <li className="checked">Тренировка на выбор</li>
              <li className="checked">Фидбек + задания</li>
              <li className="cross">Поддержка от SkillsDiff</li>
              <li className="cross">Coaching во время игры</li>
              <li className="cross">Играть 1х1 с тренером</li>
            </ul>
          </div>
        </li>
        <li className="personal-card-dota">
          <div className="personal-card-dota-heading start">
            <h4>Пакет Start</h4>
            <p className="p-first">
              Пакет “Start” научит тебя <br /> базовым навыкам игры
            </p>
            <p className="p-last">4 тренировки</p>
            <span className="span-first">799 ₽</span>
            <span className="span-last">2999 ₽</span>
            <button>Оплатить</button>
          </div>
          <div className="personal-card-dota-footer">
            <ul>
              <li className="checked">Тренировка на выбор</li>
              <li className="checked">Фидбек + задания</li>
              <li className="checked">Поддержка от SkillsDiff</li>
              <li className="cross">Coaching во время игры</li>
              <li className="cross">Играть 1х1 с тренером</li>
            </ul>
          </div>
        </li>
        <li className="personal-card-dota">
          <div className="personal-card-dota-heading divine">
            <h4>Пакет Divine+</h4>
            <p className="p-first">
              Самая популярная программа <br /> по цене и качествам
            </p>
            <p className="p-last">8 тренировка</p>
            <span className="span-first">799 ₽</span>
            <span className="span-last">4999 ₽</span>
            <button>Оплатить</button>
          </div>
          <div className="personal-card-dota-footer">
            <ul>
              <li className="checked">Тренировка на выбор</li>
              <li className="checked">Фидбек + задания</li>
              <li className="checked">Поддержка от SkillsDiff</li>
              <li className="checked">Coaching во время игры</li>
              <li className="cross">Играть 1х1 с тренером</li>
            </ul>
          </div>
        </li>
        <li className="personal-card-dota">
          <div className="personal-card-dota-heading immortal">
            <h4>Пакет Immortal</h4>
            <p className="p-first">
              Самая популярная программа <br /> по цене и качествам
            </p>
            <p className="p-last">16 тренировка</p>
            <span className="span-first">799 ₽</span>
            <span className="span-last">9499 ₽</span>
            <button>Оплатить</button>
          </div>
          <div className="personal-card-dota-footer">
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

export default PersonalTrn;
