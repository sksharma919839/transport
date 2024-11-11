import React from "react";
import Navbar from "../Componant/Navbar/Navbar";
import Shorttruckhero from "../Componant/ShorttruckHero/Shorttruckhero";
import Shorttruckabout from "../Componant/ShortTruckAbout/Shorttruckabout";
import Shorttruckmain from "../Componant/ShortTruckMain/Shorttruckmain";
import Vehicleabout from "../Componant/VehicleAbout/Vehicleabout";
import Footer from "../Componant/Footer/Footer";
import Scroll from "../Componant/Scroll/Scroll";

function Shorttruck() {
  return (
    <>
      <Navbar />
      <Shorttruckhero />
      <Shorttruckabout />
      <Shorttruckmain />
      <Vehicleabout />
      <Footer />
      <Scroll />
    </>
  );
}

export default Shorttruck;
