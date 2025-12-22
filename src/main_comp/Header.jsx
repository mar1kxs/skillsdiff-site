import React from "react";
import "../styles/header.css";

import bg from "../assets/background.svg";
import darts from "../assets/darts.png";
import dialog from "../assets/dialog.png";
import checked from "../assets/checked.png";
import group from "../assets/group.png";

const Header = () => {
  return (
    <header className="main-hdr">
      <img src={bg} alt="Skillsdiff Background" className="background-image" />

      <h1>
        Персональные{" "}
        <span
          style={{
            background: "linear-gradient(90deg, #FFB9B9, #3644FF)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          тренировки
        </span>{" "}
        с <span style={{ color: "#F1D927" }}>PRO</span>
      </h1>

      <p className="heading-desc">
        SkillsDiff создан для геймеров, стремящихся улучшить свои навыки с
        помощью профессиональных тренеров. <br /> Мы предлагаем эффективные
        тренировки, которые помогут тебе стать сильнее и увереннее в игре
      </p>

      <div className="features-container">
        <ul className="main-features">
          <li>
            <div>
              <img src={darts} alt="Darts icon" />
            </div>
            <div className="text-container">
              <h3>Персональные тренировки</h3>
              <p>Тренер подберет программу под твои цели и уровень</p>
            </div>
          </li>

          <li>
            <div>
              <img src={dialog} alt="Dialog icon" />
            </div>
            <div className="text-container">
              <h3>Поддержка на каждом этапе</h3>
              <p>Даём фидбек после каждой тренировки</p>
            </div>
          </li>

          <li>
            <div>
              <img src={checked} alt="Checked icon" />
            </div>
            <div className="text-container">
              <h3>Гарантия результата</h3>
              <p>Ты в надёжных руках — результат или возврат</p>
            </div>
          </li>

          <li>
            <div>
              <img src={group} alt="Group icon" />
            </div>
            <div className="text-container">
              <h3>Тренировки с друзьями</h3>
              <p>Тренируйтесь в паре или командой до 5 человек</p>
            </div>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
