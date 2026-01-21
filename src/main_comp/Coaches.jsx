import React, { useEffect, useRef, useState } from "react";
import "../styles/coaches.css";
import coaches from "../objects/coaches.js";
import arrleft from "../assets/arrow-left.svg";
import arrright from "../assets/arrow-right.svg";

const images = import.meta.glob("../assets/*", { eager: true });

const Coaches = (props) => {
  const listRef = useRef(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(false);

  const updateArrows = () => {
    const el = listRef.current;
    if (!el) return;

    const max = el.scrollWidth - el.clientWidth;
    const x = el.scrollLeft;

    setCanLeft(x > 2);
    setCanRight(x < max - 2);
  };

  useEffect(() => {
    updateArrows();

    const el = listRef.current;
    if (!el) return;

    el.addEventListener("scroll", updateArrows, { passive: true });
    window.addEventListener("resize", updateArrows);

    return () => {
      el.removeEventListener("scroll", updateArrows);
      window.removeEventListener("resize", updateArrows);
    };
  }, []);

  const scrollByCards = (direction) => {
    const el = listRef.current;
    if (!el) return;

    const card = el.querySelector(".coach-card");
    const cardWidth = card ? card.offsetWidth : 385;
    const gap = 20;
    const amount = cardWidth + gap;

    el.scrollBy({ left: direction * amount, behavior: "smooth" });
  };

  return (
    <section className="coaches">
      <h3 className="tag tag--animated">Опыт. Практика. Результат</h3>
      <h2>
        Наша команда{" "}
        <span
          style={{ color: props.titlecolor ? props.titlecolor : "#F1D927" }}
        >
          Тренеров
        </span>
      </h2>

      <div className="coaches-container">
        <button
          type="button"
          className={`coaches-nav coaches-nav--left ${
            canLeft ? "" : "is-hidden"
          }`}
          onClick={() => scrollByCards(-1)}
          aria-label="Прокрутить влево"
        >
          <img className="coaches-nav-icon" src={arrleft} alt="" />
        </button>

        <button
          type="button"
          className={`coaches-nav coaches-nav--right ${
            canRight ? "" : "is-hidden"
          }`}
          onClick={() => scrollByCards(1)}
          aria-label="Прокрутить вправо"
        >
          <img className="coaches-nav-icon" src={arrright} alt="" />
        </button>

        <ul className="coaches-list" ref={listRef}>
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
                      ),
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
                        ),
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
