import React from "react";
import Navbar from "../Componant/Navbar/Navbar";
import Scroll from "../Componant/Scroll/Scroll";
import Contacthero from "../Componant/ContactHero/Contacthero";
import Map from "../Componant/Map/Map";
import Footer from "../Componant/Footer/Footer";
import Contactdeatails from "../Componant/ContactDeatails/Contactdeatails";

function Contact() {
  return (
    <>
      <Navbar />
      <Contacthero />
      <Contactdeatails />
      <Map />
      <Footer />
      <Scroll />
    </>
  );
}

export default Contact;
