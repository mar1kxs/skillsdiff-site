import React from "react";
import Header from "../main_comp/Header.jsx";
import Games from "../main_comp/Games.jsx";
import Steps from "../main_comp/Steps.jsx";
import Coaches from "../main_comp/Coaches.jsx";
import Reviews from "../main_comp/Reviews.jsx";
import Faq from "../main_comp/Faq.jsx";

const Main = () => {
  return (
    <>
      <Header />
      <Games />
      <Steps />
      <Coaches />
      <Reviews />
      <Faq />
    </>
  );
};

export default Main;
