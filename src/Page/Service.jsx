import React from "react";
import Navbar from "../Componant/Navbar/Navbar";
import Servicehero from "../Componant/ServiceHero/Servicehero";
import Serviceitem from "../Componant/ServiceItem/Serviceitem";
import Serviceabout from "../Componant/ServiceAbout/Serviceabout";
import Map from "../Componant/Map/Map";
import Footer from "../Componant/Footer/Footer";
import Scroll from "../Componant/Scroll/Scroll";

function Service() {
  return (
    <>
      <Navbar />
      <Servicehero />
      <Serviceitem />
      <Serviceabout />
      <Map />
      <Footer />
      <Scroll />
    </>
  );
}

export default Service;
