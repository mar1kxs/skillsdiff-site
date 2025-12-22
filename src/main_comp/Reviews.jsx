import React from "react";
import "../styles/reviews.css";
import reviews from "../objects/reviews.js";

import stars from "../assets/5stars.svg";
import arrow from "../assets/arrow.svg";

const Reviews = () => {
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
              className={review.id === 2 ? "review-card--wide" : ""}
            >
              <img src={stars} alt="stars icon" />
              <p>{review.text}</p>
              <h4>{review.user}</h4>
            </li>
          ))}
        </ul>
      </div>

      <div className="reviews-btn">
        Больше отзывов <img src={arrow} alt="arrow icon" />
      </div>
    </section>
  );
};

export default Reviews;
