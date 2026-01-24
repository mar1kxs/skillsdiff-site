import React, { useEffect, useMemo, useRef, useState } from "react";
import "../styles/reviews.css";
import reviews from "../objects/reviews.js";
import stars from "../assets/5stars.svg";

const CLOSED_HEIGHT = 298;

const Reviews = (props) => {
  const [openKey, setOpenKey] = useState(null);
  const cardRefs = useRef({});
  const scrollerRef = useRef(null);

  const isMobile = useMemo(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(hover: none) and (pointer: coarse)").matches;
  }, []);

  // держим актуальное openKey в ref, чтобы не пересоздавать loop
  const openKeyRef = useRef(null);
  useEffect(() => {
    openKeyRef.current = openKey;
  }, [openKey]);

  const openInstant = (el) => {
    el.classList.add("open");
    el.style.maxHeight = "none"; // ключ: никакого scrollHeight/transition
  };

  const closeInstant = (el) => {
    el.classList.remove("open");
    el.style.maxHeight = `${CLOSED_HEIGHT}px`;
  };

  const animateOpen = (el) => {
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

    // закрываем предыдущую
    if (currentOpen && currentOpen !== key) {
      const prevEl = cardRefs.current[currentOpen];
      if (prevEl) {
        if (isMobile) closeInstant(prevEl);
        else animateClose(prevEl);
      }
    }

    const el = cardRefs.current[key];
    if (el) {
      if (nextOpen === key) {
        if (isMobile) openInstant(el);
        else animateOpen(el);
      } else {
        if (isMobile) closeInstant(el);
        else animateClose(el);
      }
    }

    setOpenKey(nextOpen);
  };

  // === Mobile auto-scroll ===
  useEffect(() => {
    if (!isMobile) return;

    const el = scrollerRef.current;
    if (!el) return;

    let rafId = 0;
    let pausedByTouch = false;
    let pauseTimer = 0;

    const speedPxPerSec = 18;
    let last = performance.now();

    const loop = (t) => {
      const dt = (t - last) / 1000;
      last = t;

      // КЛЮЧ: если карточка открыта — НЕ скроллим вообще
      const pausedByOpenCard = !!openKeyRef.current;

      if (!pausedByTouch && !pausedByOpenCard) {
        el.scrollLeft += speedPxPerSec * dt;

        const max = el.scrollWidth - el.clientWidth;
        if (max > 0 && el.scrollLeft >= max - 2) el.scrollLeft = 0;
      }

      rafId = requestAnimationFrame(loop);
    };

    const pauseAuto = () => {
      pausedByTouch = true;
      clearTimeout(pauseTimer);
      pauseTimer = window.setTimeout(() => {
        pausedByTouch = false;
        last = performance.now();
      }, 1200);
    };

    el.addEventListener("touchstart", pauseAuto, { passive: true });
    el.addEventListener("touchmove", pauseAuto, { passive: true });
    el.addEventListener("scroll", pauseAuto, { passive: true });

    rafId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(pauseTimer);
      el.removeEventListener("touchstart", pauseAuto);
      el.removeEventListener("touchmove", pauseAuto);
      el.removeEventListener("scroll", pauseAuto);
    };
  }, [isMobile]);

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

      <div
        className={`reviews-container ${isMobile ? "reviews-scroll" : "reviews-auto"}`}
        ref={isMobile ? scrollerRef : null}
      >
        <div className="reviews-track">
          {renderRow("a")}
          {!isMobile && renderRow("b", true)}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
