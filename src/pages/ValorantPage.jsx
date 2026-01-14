import React from "react";
import HeaderValo from "../valorant_comp/HeaderValo";
import PersonalValo from "../valorant_comp/PersonalValo";
import WithFriendsValo from "../valorant_comp/FriendsValo";
import Faq from "../main_comp/Faq.jsx";
import OtherValo from "../valorant_comp/OtherValo.jsx";
import Reviews from "../main_comp/Reviews.jsx";
import Coaches from "../main_comp/Coaches.jsx";
import SpecialValo from "../valorant_comp/SpecialValo.jsx";

const ValorantPage = () => {
  return (
    <>
      <HeaderValo />
      <PersonalValo />
      <WithFriendsValo />
      <SpecialValo />
      <OtherValo />
      <Reviews titlecolor="#FF4350" />
      <Faq />
    </>
  );
};

export default ValorantPage;
