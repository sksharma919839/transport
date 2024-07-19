import React from "react";
import Navbar from "../Componant/Navbar/Navbar";
import Vehiclehero from "../Componant/VehicleHero/Vehiclehero";
import Vehicleitem from "../Componant/VehicleItem/Vehicleitem";
import Vehicleabout from "../Componant/VehicleAbout/Vehicleabout";
import Map from "../Componant/Map/Map";
import Footer from "../Componant/Footer/Footer";
import Scroll from "../Componant/Scroll/Scroll";

function Vehicle() {
  return (
    <>
      <Navbar />
      <Vehiclehero />
      <Vehicleitem />
      <Vehicleabout />
      <Map />
      <Footer />
      <Scroll />
    </>
  );
}

export default Vehicle;
