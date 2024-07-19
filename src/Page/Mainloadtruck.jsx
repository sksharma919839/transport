import React from "react";
import Navbar from "../Componant/Navbar/Navbar";
import Mlthero from "../Componant/MltHero/Mlthero";
import Mltimage from "../Componant/MltImage/Mltimage";
import Mltdata from "../Componant/MltData/Mltdata";
import Vehicleabout from "../Componant/VehicleAbout/Vehicleabout";
import Footer from "../Componant/Footer/Footer";
import Scroll from "../Componant/Scroll/Scroll";

function Mainloadtruck() {
  return (
    <>
      <Navbar />
      <Mlthero />
      <Mltimage />
      <Mltdata />
      <Vehicleabout />
      <Footer />
      <Scroll />
    </>
  );
}

export default Mainloadtruck;
