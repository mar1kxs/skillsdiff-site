import React from "react";
import HeaderDota from "../dota_comp/HeaderDota";
import PersonalTrn from "../dota_comp/PersonalTrn";
import WithFriendsTrn from "../dota_comp/WithFriendsTrn";
import Faq from "../main_comp/Faq.jsx";
import OtherDota from "../dota_comp/OtherDota.jsx";
import Reviews from "../main_comp/Reviews.jsx";

const DotaPage = () => {
  return (
    <>
      <HeaderDota />
      <PersonalTrn />
      <WithFriendsTrn />
      <OtherDota />
      <Reviews className="dota-reviews" />
      <Faq />
    </>
  );
};

export default DotaPage;
