import React from "react";
import "../styles/steps.css";

import wave from "../assets/Wave.svg";

const Steps = () => {
  return (
    <section className="steps">
      <img src={wave} alt="background wave" />
      <h3 className="tag tag--animated">Как это работает?</h3>
      <h2>
        Твой путь к <span style={{ color: "#F1D927" }}>скиллу</span>
      </h2>

      <ul className="steps-list">
        <li>
          <span>01</span>
          <h4>Ознакомься с ассортиментом</h4>
          <p>
            Перед тобой богатый выбор услуг — выбери дисциплину, в которой
            хочешь прокачаться, и начни путь к победам
          </p>
        </li>

        <li>
          <span>02</span>
          <h4>Выбери удобный способ оплаты</h4>
          <p>
            Плати быстро и безопасно — через проверенную систему. Надёжность и
            удобство в одном клике
          </p>
        </li>

        <li>
          <span>03</span>
          <h4>Познакомься с тренером</h4>
          <p>
            Наша команда подберёт тебе прекрасного тренера, который поможет в
            развитии твоих навыков
          </p>
        </li>

        <li>
          <span>04</span>
          <h4>Приступай к тренировкам</h4>
          <p>
            Гибкий график тебе поможет учиться тогда, когда тебе это нужно.
            Развивайся, учись, играй и веселись вместе с нами
          </p>
        </li>
      </ul>
    </section>
  );
};

export default Steps;
