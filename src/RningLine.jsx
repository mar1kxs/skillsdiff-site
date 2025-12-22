import React from "react";
import Marquee from "react-fast-marquee";
import "./styles/marquee.css";

export default function RningLine() {
  return (
    <Marquee
      gradient={false}
      speed={100}
      pauseOnHover={true}
      className="rning-line"
      autoFill={true}
    >
      <span>
        Активируйте промокод <b>SKILLSDIFF2026</b> и сэкономьте 10%
      </span>
    </Marquee>
  );
}
