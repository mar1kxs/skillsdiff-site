import React from "react";
import "../styles/dotahdr.css";
import icon1 from "../assets/d2featicon.svg";

const HeaderDota = () => {
  return (
    <header className="dota-hdr">
      <img src="../src/assets/DotaBG.png" alt="Dota BG" className="dota-bg" />
      <div className="dota-main-div">
        <ul className="dota-hdr-ul">
          <li>Анализ игры</li>
          <li>Тренировки с друзьями</li>
          <li>Персональные тренировки</li>
          <li>Party-игры с тренером</li>
        </ul>
        <h2>
          Путь к победе <br /> начинается с{" "}
          <span style={{ color: "#FF6C32" }}>тренировки</span>
        </h2>
        <button>Начать тренировку сейчас!</button>
      </div>
      <div className="dota-features">
        <ul>
          <li>
            <div>
              <img src={icon1} alt="" />
            </div>{" "}
            <p>Результаты гарантированы</p>
          </li>
          <li>
            <div>
              <img src={icon1} alt="" />{" "}
            </div>
            <p>
              Безусловный <br />
              успех
            </p>
          </li>
          <li>
            <div>
              <img src={icon1} alt="" />{" "}
            </div>{" "}
            <p>Команда профи- тренеров</p>
          </li>
          <li>
            <div>
              <img src={icon1} alt="" />{" "}
            </div>{" "}
            <p>Гибкость и удобство</p>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default HeaderDota;
