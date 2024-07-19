import React from "react";
import Navbar from "../Componant/Navbar/Navbar";
import Abouthero from "../Componant/AboutHero/Abouthero";
import Aboutmisson from "../Componant/AboutMisson/Aboutmisson";
import Map from "../Componant/Map/Map";
import Footer from "../Componant/Footer/Footer";
import Aboutvalue from "../Componant/AboutValue/Aboutvalue";
import Aboutitem from "../Componant/AboutItem/Aboutitem";
import Aboutcontact from "../Componant/AboutContact/Aboutcontact";
import Scroll from "../Componant/Scroll/Scroll";

function Aboutus() {
  return (
    <>
      <Navbar />
      <Abouthero />
      <Aboutmisson />
      <Aboutvalue />
      <Aboutitem />
      <Aboutcontact />
      <Map />
      <Footer />
      <Scroll />
    </>
  );
}

export default Aboutus;
