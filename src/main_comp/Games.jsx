import React from "react";
import "../styles/games.css";
import { useNavigate } from "react-router-dom";

import valorantCard from "../assets/ValorantCard.png";
import valorantSmall from "../assets/ValorantSmall.png";
import dotaCard from "../assets/DOTA2Card.png";
import dotaSmall from "../assets/dotaSmall.png";
import cs2Card from "../assets/CS2Card.png";
import csSmall from "../assets/csSmall.png";

const Games = () => {
  const navigate = useNavigate();

  return (
    <section className="games-parent">
      <ul className="games-list">
        <li onClick={() => navigate("/valorant")} role="button" tabIndex={0}>
          <img
            src={valorantCard}
            alt="Valorant card background"
            className="cardbg"
          />
          <div>
            Valorant{" "}
            <span>
              <img src={valorantSmall} alt="Valorant icon" />
            </span>
          </div>
        </li>

        <li onClick={() => navigate("/dota2")} role="button" tabIndex={0}>
          <img src={dotaCard} alt="Dota 2 card background" className="cardbg" />
          <div>
            Dota 2
            <span>
              <img src={dotaSmall} alt="Dota 2 icon" />
            </span>
          </div>
        </li>

        <li aria-disabled="true" style={{ cursor: "not-allowed" }}>
          <img src={cs2Card} alt="CS2 card background" className="cardbg" />
          <div>
            Скоро
            <span>
              <img src={csSmall} alt="CS icon" />
            </span>
          </div>
        </li>

        <li aria-disabled="true" style={{ cursor: "not-allowed" }}>
          <img src="" alt="" className="cardbg" />
          <div>
            Секрет
            <span>
              <img src="" alt="" />
            </span>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Games;
