import React from "react";
import Navbar from "../Componant/Navbar/Navbar";
import Towservicehero from "../Componant/TowserviceHero/Towservicehero";
import Towservicedata from "../Componant/Towservicedata/Towservicedata";
import Map from "../Componant/Map/Map";
import Footer from "../Componant/Footer/Footer";
import Scroll from "../Componant/Scroll/Scroll";

function Towservice() {
  return (
    <>
      <Navbar />
      <Towservicehero />
      <Towservicedata />
      <Map />
      <Footer />
      <Scroll />
    </>
  );
}

export default Towservice;
