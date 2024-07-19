import React from "react";
import Navbar from "../Componant/Navbar/Navbar";
import Logistichero from "../Componant/LogisticHero/Logistichero";
import Transportdata from "../Componant/TransportData/Transportdata";
import Map from "../Componant/Map/Map";
import Footer from "../Componant/Footer/Footer";
import Scroll from "../Componant/Scroll/Scroll";

function Logistic() {
  return (
    <>
      <Navbar />
      <Logistichero />
      <Transportdata />
      <Map />
      <Footer />
      <Scroll />
    </>
  );
}

export default Logistic;
