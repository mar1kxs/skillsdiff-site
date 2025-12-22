import React from "react";
import "../styles/games.css";
import { useNavigate } from "react-router-dom";
const Games = () => {
  const navigate = useNavigate();
  return (
    <section className="games-parent">
      <ul className="games-list">
        <li onClick={() => navigate("/valorant")}>
          <img src="../src/assets/ValorantCard.png" alt="ValorantCardBG" />
          <div>
            Valorant{" "}
            <span>
              <img src="../src/assets/ValorantSmall.png" alt="Valorant icon" />
            </span>
          </div>
        </li>
        <li onClick={() => navigate("/dota2")}>
          <img src="../src/assets/DOTA2Card.png" alt="DOTA2CardBG" />
          <div>
            Dota 2
            <span>
              <img src="../src/assets/dotaSmall.png" alt="DOTA2 icon" />
            </span>
          </div>
        </li>
        <li>
          <img src="../src/assets/CS2Card.png" alt="CS2CardBG" />
          <div>
            Скоро
            <span>
              <img src="../src/assets/csSmall.png" alt="CS icon" />
            </span>
          </div>
        </li>
        <li>
          <img src="" alt="" />
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
