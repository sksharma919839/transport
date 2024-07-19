import React from "react";
import Navbar from "../Componant/Navbar/Navbar";
import Transporthero from "../Componant/TransportHero/Transporthero";
import Map from "../Componant/Map/Map";
import Footer from "../Componant/Footer/Footer";
import Scroll from "../Componant/Scroll/Scroll";
import Transportdata from "../Componant/TransportData/Transportdata";

function Transport() {
  return (
    <>
      <Navbar />
      <Transporthero />
      <Transportdata />
      <Map />
      <Footer />
      <Scroll />
    </>
  );
}

export default Transport;
