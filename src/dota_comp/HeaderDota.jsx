import React from "react";
import "../styles/dotahdr.css";
import icon1 from "../assets/d2featicon.svg";
import icon2 from "../assets/d2featicon2.svg";
import icon3 from "../assets/d2featicon3.svg";
import icon4 from "../assets/d2featicon4.svg";
import dotaBg from "../assets/DotaBG.png";

const HeaderDota = () => {
  return (
    <header className="dota-hdr">
      <img src={dotaBg} alt="Dota BG" className="dota-bg" />

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

        <button type="button">Начать тренировку сейчас!</button>
      </div>

      <div className="dota-features">
        <ul>
          <li>
            <div>
              <img src={icon1} alt="feature icon 1" />
            </div>
            <p>
              Результаты <br /> гарантированы
            </p>
          </li>

          <li>
            <div>
              <img src={icon2} alt="feature icon 2" />
            </div>
            <p>
              Безусловный <br />
              успех
            </p>
          </li>

          <li>
            <div>
              <img src={icon3} alt="feature icon 3" />
            </div>
            <p>
              Команда профи- <br /> тренеров
            </p>
          </li>

          <li>
            <div>
              <img src={icon4} alt="feature icon 4" />
            </div>
            <p>
              Гибкость и <br />
              удобство
            </p>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default HeaderDota;
