import React from "react";
import Banner from "../../../Shared/Banners/Banner";
import InfoCarts from "../Info/InfoCarts";
import MakeAppontment from "../Makeappontment/MakeAppontment";
import Services from "./Services/Services";
import Testimonial from "./Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <InfoCarts></InfoCarts>
      <Services></Services>
      <MakeAppontment></MakeAppontment>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
