import React from "react";
import Navbar from "../Componant/Navbar/Navbar";
import Bushero from "../Componant/BusHero/Bushero";
import Shorttruckabout from "../Componant/ShortTruckAbout/Shorttruckabout";
import Shorttruckmain from "../Componant/ShortTruckMain/Shorttruckmain";
import Vehicleabout from "../Componant/VehicleAbout/Vehicleabout";
import Footer from "../Componant/Footer/Footer";
import Scroll from "../Componant/Scroll/Scroll";

function Bustransport() {
  return (
    <>
      <Navbar />
      <Bushero />
      <Shorttruckabout />
      <Shorttruckmain />
      <Vehicleabout />
      <Footer />
      <Scroll />
    </>
  );
}

export default Bustransport;
