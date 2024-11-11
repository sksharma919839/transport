import React from "react";
import Navbar from "../Componant/Navbar/Navbar";
import Storagehero from "../Componant/StorageHero/Storagehero";
import Mltimage from "../Componant/MltImage/Mltimage";
import Mltdata from "../Componant/MltData/Mltdata";
import Vehicleabout from "../Componant/VehicleAbout/Vehicleabout";
import Footer from "../Componant/Footer/Footer";
import Scroll from "../Componant/Scroll/Scroll";

function Storagewith() {
  return (
    <>
      <Navbar />
      <Storagehero />
      <Mltimage />
      <Mltdata />
      <Vehicleabout />
      <Footer />
      <Scroll />
    </>
  );
}

export default Storagewith;
