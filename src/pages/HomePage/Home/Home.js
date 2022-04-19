import React from "react";
import Services from "../../Services/Services/Services";
import Banner from "../Banner/Banner";
import GetOneTouch from "../GetOneTouch/GetOneTouch";

const Home = () => {
  return (
    <div>
      <Banner />
      <Services />
      <GetOneTouch />
    </div>
  );
};

export default Home;
