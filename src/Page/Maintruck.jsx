import React from "react";
import Navbar from "../Componant/Navbar/Navbar";
import Maintruckhero from "../Componant/MainTruckHero/Maintruckhero";
import Shorttruckabout from "../Componant/ShortTruckAbout/Shorttruckabout";
import Shorttruckmain from "../Componant/ShortTruckMain/Shorttruckmain";
import Vehicleabout from "../Componant/VehicleAbout/Vehicleabout";
import Footer from "../Componant/Footer/Footer";
import Scroll from "../Componant/Scroll/Scroll";

function Maintruck() {
  return (
    <>
      <Navbar />
      <Maintruckhero />
      <Shorttruckabout />
      <Shorttruckmain />
      <Vehicleabout />
      <Footer />
      <Scroll />
    </>
  );
}

export default Maintruck;
