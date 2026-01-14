import React from "react";
import HeaderDota from "../dota_comp/HeaderDota";
import PersonalTrn from "../dota_comp/PersonalTrn";
import WithFriendsTrn from "../dota_comp/WithFriendsTrn";
import Faq from "../main_comp/Faq.jsx";
import OtherDota from "../dota_comp/OtherDota.jsx";
import Reviews from "../main_comp/Reviews.jsx";
import Coaches from "../main_comp/Coaches.jsx";

const DotaPage = () => {
  return (
    <>
      <HeaderDota />
      <PersonalTrn />
      <WithFriendsTrn />
      <OtherDota />
      <Coaches titlecolor="#FF6C32" />
      <Reviews titlecolor="#FF6C32" />
      <Faq />
    </>
  );
};

export default DotaPage;
