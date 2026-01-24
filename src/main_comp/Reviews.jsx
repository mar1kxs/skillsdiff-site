// Reviews.jsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import "../styles/reviews.css";
import reviews from "../objects/reviews.js";
import stars from "../assets/5stars.svg";

const CLOSED_HEIGHT = 298;

const Reviews = (props) => {
  const [openKey, setOpenKey] = useState(null);
  const [modalReview, setModalReview] = useState(null);

  const cardRefs = useRef({});
  const scrollerRef = useRef(null);

  const isMobile = useMemo(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(hover: none) and (pointer: coarse)").matches;
  }, []);

  const lockBody = (locked) => {
    if (typeof document === "undefined") return;
    const body = document.body;
    if (!body) return;
    body.style.overflow = locked ? "hidden" : "";
    body.style.touchAction = locked ? "none" : "";
  };

  useEffect(() => {
    if (!isMobile) return;
    lockBody(!!modalReview);
    return () => lockBody(false);
  }, [isMobile, modalReview]);

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

  const toggleDesktop = (key) => {
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

  // Mobile: бесконечный wrap + авто поверх ручного
  useEffect(() => {
    if (!isMobile) return;

    const el = scrollerRef.current;
    if (!el) return;

    let rafId = 0;
    let pausedByTouch = false;
    let pauseTimer = 0;

    const speedPxPerSec = 18;
    let last = performance.now();

    const getHalf = () => el.scrollWidth / 2;

    const wrapIfNeeded = () => {
      const half = getHalf();
      if (!half || !Number.isFinite(half)) return;

      if (el.scrollLeft >= half) el.scrollLeft -= half;
      if (el.scrollLeft < 0) el.scrollLeft += half;
    };

    const loop = (t) => {
      const dt = (t - last) / 1000;
      last = t;

      const pausedByModal = !!modalReview;
      if (!pausedByTouch && !pausedByModal) {
        el.scrollLeft += speedPxPerSec * dt;
        wrapIfNeeded();
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

    const onScroll = () => {
      wrapIfNeeded();
      pauseAuto();
    };

    el.addEventListener("touchstart", pauseAuto, { passive: true });
    el.addEventListener("touchmove", pauseAuto, { passive: true });
    el.addEventListener("scroll", onScroll, { passive: true });

    el.scrollLeft = 0;
    rafId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(pauseTimer);
      el.removeEventListener("touchstart", pauseAuto);
      el.removeEventListener("touchmove", pauseAuto);
      el.removeEventListener("scroll", onScroll);
    };
  }, [isMobile, modalReview]);

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
            onClick={() => {
              if (isMobile) setModalReview(review);
              else toggleDesktop(key);
            }}
            style={!isMobile ? { maxHeight: `${CLOSED_HEIGHT}px` } : undefined}
          >
            <img src={stars} alt="stars icon" />
            <h4>{review.user}</h4>
            <p>{review.text}</p>

            <span
              className="more-reviews"
              onClick={(e) => {
                e.stopPropagation();
                if (isMobile) setModalReview(review);
                else toggleDesktop(key);
              }}
            >
              {isMobile
                ? "Читать далее →"
                : isOpen
                  ? "Свернуть ←"
                  : "Читать далее →"}
            </span>
          </li>
        );
      })}
    </ul>
  );

  return (
    <section className="reviews">
      {/* ВЕРНУЛИ как было: цветные элементы сзади именно секции */}
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
          {/* дубль для бесконечного скролла */}
          {renderRow("b", true)}
        </div>
      </div>

      {isMobile &&
        modalReview &&
        createPortal(
          <div
            className="review-modal"
            role="dialog"
            aria-modal="true"
            onClick={() => setModalReview(null)}
          >
            <div
              className="review-modal__panel"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={stars} alt="stars icon" />
              <h4>{modalReview.user}</h4>
              <p>{modalReview.text}</p>

              <button
                className="review-modal__close"
                onClick={() => setModalReview(null)}
              >
                Закрыть
              </button>
            </div>
          </div>,
          document.body,
        )}
    </section>
  );
};

export default Reviews;
