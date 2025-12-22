import React from "react";
import "../styles/coaches.css";
import coaches from "../objects/coaches.js";

// Забираем все картинки из папки assets
const images = import.meta.glob("../assets/*", { eager: true });

const Coaches = () => {
  return (
    <section className="coaches">
      <h3>Опыт. Практика. Результат</h3>
      <h2>
        Наша команда <span style={{ color: "#F1D927" }}>Тренеров</span>
      </h2>

      <div className="coaches-container">
        <ul className="coaches-list">
          {coaches.map((coach) => {
            const imgPath = `../assets/${coach.img}`;
            const imgSrc = images[imgPath]?.default;

            return (
              <li key={coach.id} className="coach-card">
                <img src={imgSrc} alt={`${coach.name} img`} loading="lazy" />

                <h4>{coach.name}</h4>

                <div className="coach-info">
                  <ul className="coach-list">
                    <li>{coach.game}</li>
                    <li>{coach.rank}</li>
                    <li>{coach.ingameexp}</li>
                  </ul>

                  <p>
                    <b>Роль:</b> {coach.role}
                  </p>

                  <p>
                    <b>Опыт:</b>{" "}
                    {coach.exp.split("{highlight1}").map((part, index) =>
                      index === 0 ? (
                        part
                      ) : (
                        <span key={index}>
                          <span style={{ color: "#FF5454" }}>
                            {coach.highlight1}
                          </span>
                          {part}
                        </span>
                      )
                    )}
                  </p>

                  <p>
                    <b>Игровые достижения:</b>{" "}
                    {coach.achievements
                      .split("{highlight2}")
                      .map((part, index) =>
                        index === 0 ? (
                          part
                        ) : (
                          <span key={index}>
                            <span style={{ color: "#FF5454" }}>
                              {coach.highlight2}
                            </span>
                            {part}
                          </span>
                        )
                      )}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Coaches;
