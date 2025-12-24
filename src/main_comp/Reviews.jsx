import React, { useRef, useState } from "react";
import "../styles/reviews.css";
import reviews from "../objects/reviews.js";
import stars from "../assets/5stars.svg";

const CLOSED_HEIGHT = 298;

const Reviews = () => {
  const [openId, setOpenId] = useState(null);
  const cardRefs = useRef({});

  const animateOpen = (el) => {
    // стартуем из закрытого состояния
    el.style.maxHeight = `${CLOSED_HEIGHT}px`;

    requestAnimationFrame(() => {
      el.classList.add("open");
      const full = el.scrollHeight;
      el.style.maxHeight = `${full}px`;
    });
  };

  const animateClose = (el) => {
    // фиксируем текущую высоту (чтобы было от чего анимировать)
    const current = el.scrollHeight;
    el.style.maxHeight = `${current}px`;

    requestAnimationFrame(() => {
      el.style.maxHeight = `${CLOSED_HEIGHT}px`;
    });

    // класс open убираем ПОСЛЕ анимации, иначе текст схлопнется мгновенно
    const onEnd = (e) => {
      if (e.propertyName !== "max-height") return;
      el.classList.remove("open");
      el.removeEventListener("transitionend", onEnd);
    };
    el.addEventListener("transitionend", onEnd);
  };

  const toggle = (id) => {
    const currentOpen = openId;
    const nextOpen = currentOpen === id ? null : id;

    // закрываем текущую открытую (если есть и это не та же)
    if (currentOpen && currentOpen !== id) {
      const prevEl = cardRefs.current[currentOpen];
      if (prevEl) animateClose(prevEl);
    }

    // открываем/закрываем кликнутую
    const el = cardRefs.current[id];
    if (el) {
      if (nextOpen === id) animateOpen(el);
      else animateClose(el);
    }

    setOpenId(nextOpen);
  };

  return (
    <section className="reviews">
      <h2>
        Отзывы наших <span style={{ color: "#F1D927" }}>учеников</span>
      </h2>

      <div className="reviews-container">
        <ul>
          {reviews.map((review) => (
            <li
              key={review.id}
              className="review-card"
              ref={(node) => {
                if (node) cardRefs.current[review.id] = node;
              }}
              onClick={() => toggle(review.id)}
              style={{ maxHeight: `${CLOSED_HEIGHT}px` }}
            >
              <img src={stars} alt="stars icon" />
              <h4>{review.user}</h4>
              <p>{review.text}</p>

              <span
                className="more-reviews"
                onClick={(e) => {
                  e.stopPropagation();
                  toggle(review.id);
                }}
              >
                {openId === review.id ? "Свернуть ←" : "Читать далее →"}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Reviews;
