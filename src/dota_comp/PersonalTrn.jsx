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
        <li>
          <div>
            <h4>1 тренировка</h4>
            <p>Идеальный выбор, чтобы познакомиться с программой </p>
            <p>1 тренировка</p>
            <span>799 ₽</span>
            <span>799 ₽</span>
            <button>Оплатить</button>
          </div>
          <div>
            <ul>
              <li>Тренировка на выбор</li>
              <li>Фидбек + задания</li>
              <li>Поддержка от SkillsDiff</li>
              <li>Coaching во время игры</li>
              <li>Играть 1х1 с тренером</li>
            </ul>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default PersonalTrn;
