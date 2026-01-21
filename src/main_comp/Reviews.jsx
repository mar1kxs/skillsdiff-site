import React, { useRef, useState } from "react";
import "../styles/reviews.css";
import reviews from "../objects/reviews.js";
import stars from "../assets/5stars.svg";

const CLOSED_HEIGHT = 298;

const Reviews = (props) => {
  const [openKey, setOpenKey] = useState(null);
  const cardRefs = useRef({});

  const animateOpen = (el) => {
    // включаем will-change только на время анимации (важно для мобилки)
    el.style.willChange = "max-height";
    el.style.maxHeight = `${CLOSED_HEIGHT}px`;

    requestAnimationFrame(() => {
      el.classList.add("open");

      requestAnimationFrame(() => {
        el.style.maxHeight = `${el.scrollHeight}px`;
      });
    });

    const onEnd = (e) => {
      if (e.propertyName !== "max-height") return;
      el.style.willChange = "auto";
      el.removeEventListener("transitionend", onEnd);
    };
    el.addEventListener("transitionend", onEnd);
  };

  const animateClose = (el) => {
    el.style.willChange = "max-height";
    el.style.maxHeight = `${el.scrollHeight}px`;

    requestAnimationFrame(() => {
      el.style.maxHeight = `${CLOSED_HEIGHT}px`;
    });

    const onEnd = (e) => {
      if (e.propertyName !== "max-height") return;
      el.classList.remove("open");
      el.style.willChange = "auto";
      el.removeEventListener("transitionend", onEnd);
    };
    el.addEventListener("transitionend", onEnd);
  };

  const toggle = (key) => {
    const currentOpen = openKey;
    const nextOpen = currentOpen === key ? null : key;

    if (currentOpen && currentOpen !== key) {
      const prevEl = cardRefs.current[currentOpen];
      if (prevEl) animateClose(prevEl);
    }

    const el = cardRefs.current[key];
    if (el) {
      if (nextOpen === key) animateOpen(el);
      else animateClose(el);
    }

    setOpenKey(nextOpen);
  };

  const renderRow = (prefix, ariaHidden = false) => (
    <ul className="reviews-row" aria-hidden={ariaHidden}>
      {reviews.map((review, idx) => {
        const key = `${prefix}-${review.id}-${idx}`;
        const isOpen = openKey === key;

        return (
          <li
            key={key}
            className={`review-card ${isOpen ? "open" : ""}`}
            ref={(node) => {
              if (node) cardRefs.current[key] = node;
            }}
            onClick={() => toggle(key)}
            style={{ maxHeight: `${CLOSED_HEIGHT}px` }}
          >
            <img src={stars} alt="stars icon" />
            <h4>{review.user}</h4>
            <p>{review.text}</p>

            <span
              className="more-reviews"
              onClick={(e) => {
                e.stopPropagation();
                toggle(key);
              }}
            >
              {isOpen ? "Свернуть ←" : "Читать далее →"}
            </span>
          </li>
        );
      })}
    </ul>
  );

  return (
    <section className="reviews">
      <span className="purple1-review" />
      <span className="purple2-review" />

      <h2>
        Отзывы наших{" "}
        <span
          style={{ color: props.titlecolor ? props.titlecolor : "#F1D927" }}
        >
          учеников
        </span>
      </h2>

      <div className="reviews-container reviews-auto">
        <div className="reviews-track">
          {renderRow("a")}
          {renderRow("b", true)}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
