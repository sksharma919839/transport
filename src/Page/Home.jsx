import React from "react";
import Navbar from "../Componant/Navbar/Navbar";
import Hero from "../Componant/Hero/Hero";
import Ofservice from "../Componant/Ofservice/Ofservice";
import Deatail from "../Componant/Deatails/Deatails";
import Ourservice from "../Componant/Ourservice/Ourservice";
import Experince from "../Componant/Experince/Experince";
import Review from "../Componant/Review/Review";
import Order from "../Componant/Order/Order";
import Footer from "../Componant/Footer/Footer";
import Scroll from "../Componant/Scroll/Scroll";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Ofservice />
      <Deatail />
      <Ourservice />
      <Experince />
      <Review />
      <Order />
      <Footer />
      <Scroll />
    </>
  );
}

export default Home;
