import React from "react";
import "../styles/typage.css";
import icon from "../assets/typage.png";
import bg from "../assets/thankyoubg.svg";

const ThankYouPage = () => {
  return (
    <main className="ty-page">
      <img src={bg} alt="ThankYou bg" className="ty-bg" />
      <div className="ty-content">
        <h1>Поздравляем! Ваша тренировка оплачена!</h1>

        <div className="ty-text">
          <p>Что дальше?</p>
          <p>
            Спасибо за оплату! Теперь мы начнем процесс подбора тренера
            специально для вас. Перейдите в <a href="#">Telegram-бот</a>,
            ответьте на пару вопросов, и вскоре тренер свяжется с вами, чтобы
            согласовать удобное время.
          </p>
        </div>

        <a href="#" className="ty-button">
          Telegram
        </a>
      </div>

      <img src={icon} alt="ty-page img" className="ty-hero" />
    </main>
  );
};

export default ThankYouPage;
