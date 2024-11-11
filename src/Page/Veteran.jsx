import React from "react";
import Navbar from "../Componant/Navbar/Navbar";
import Veteranhero from "../Componant/VeteranHero/Veteranhero";
import Mltimage from "../Componant/MltImage/Mltimage";
import Mltdata from "../Componant/MltData/Mltdata";
import Vehicleabout from "../Componant/VehicleAbout/Vehicleabout";
import Footer from "../Componant/Footer/Footer";
import Scroll from "../Componant/Scroll/Scroll";

function Veteran() {
  return (
    <>
      <Navbar />
      <Veteranhero />
      <Mltimage />
      <Mltdata />
      <Vehicleabout />
      <Footer />
      <Scroll />
    </>
  );
}

export default Veteran;
