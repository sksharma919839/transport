import React from "react";
import Navbar from "../Componant/Navbar/Navbar";
import Passengerhero from "../Componant/PassengerHero/Passengerhero";
import Transportdata from "../Componant/TransportData/Transportdata";
import Map from "../Componant/Map/Map";
import Footer from "../Componant/Footer/Footer";
import Scroll from "../Componant/Scroll/Scroll";

function Passenger() {
  return (
    <>
      <Navbar />
      <Passengerhero />
      <Transportdata />
      <Map />
      <Footer />
      <Scroll />
    </>
  );
}

export default Passenger;
