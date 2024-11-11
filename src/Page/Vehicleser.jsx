import React from "react";
import Navbar from "../Componant/Navbar/Navbar";
import Vehicleserhero from "../Componant/VehicleSerHero/Vehicleserhero";
import Towservicedata from "../Componant/Towservicedata/Towservicedata";
import Map from "../Componant/Map/Map";
import Footer from "../Componant/Footer/Footer";
import Scroll from "../Componant/Scroll/Scroll";

function Vehicleser() {
  return (
    <>
      <Navbar />
      <Vehicleserhero />
      <Towservicedata />
      <Map />
      <Footer />
      <Scroll />
    </>
  );
}

export default Vehicleser;
