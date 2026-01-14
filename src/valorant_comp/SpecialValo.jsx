import React from "react";
import dagger from "../assets/dagger.png";
import "../styles/specialvalo.css";

const SpecialValo = () => {
  return (
    <section className="special-valo">
      <div className="special-container">
        <div className="special-content">
          <h2>
            Aim-курс от DaGG3r — научись <br />
            стрелять от{" "}
            <span style={{ color: "#FF4350" }}>
              топ-1 в мире по <br />
              Headshot%
            </span>
          </h2>
          <p>
            Разбор твоей демки, наглядное обучение от первого лица и оптимизация
            ПК — всё, чтобы твой аим был как у легенды Valorant.
          </p>
          <span className="special-price">3000 ₽</span>
          <button>Оплатить</button>
        </div>
        <img className="special-img" src={dagger} alt="DaGG3r photo" />
      </div>
    </section>
  );
};

export default SpecialValo;
