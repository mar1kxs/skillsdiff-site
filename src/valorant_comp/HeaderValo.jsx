import React from "react";
import "../styles/valohdr.css";
import icon1 from "../assets/valofeaticon.svg";
import icon2 from "../assets/valofeaticon2.svg";
import icon3 from "../assets/valofeaticon3.svg";
import icon4 from "../assets/valofeaticon4.svg";
import valoBg from "../assets/valobg.png";

const HeaderValo = () => {
  return (
    <header className="valo-hdr">
      <img src={valoBg} alt="Valo BG" className="valo-bg" />

      <div className="valo-main-div">
        <ul className="valo-hdr-ul">
          <li>Анализ игры</li>
          <li>Тренировки с друзьями</li>
          <li>Персональные тренировки</li>
          <li>Party-игры с тренером</li>
        </ul>

        <h2>
          Путь к победе <br /> начинается с{" "}
          <span style={{ color: "#FF4350" }}>тренировки</span>
        </h2>

        <button type="button">Начать тренировку сейчас!</button>
      </div>

      <div className="valo-features">
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

export default HeaderValo;
