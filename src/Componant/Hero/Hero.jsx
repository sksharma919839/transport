import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <>
      <div className="pt-[70px] w-[100%]">
        <div className="hero-bg-1 h-[680px] w-[100%]">
          <p className="text-white sm:text-6xl text-[40px] text-center pt-[150px] pb-[10px]">
            One step solution for
          </p>
          <h1 className="text-white sm:text-6xl text-[40px] text-center">
            WORLDWIDE TRANSPORT
          </h1>
          <p className="text-white text-xl text-center">
            We make your cargo transport simple!
          </p>
          <div className="flex items-center justify-center">
            <Link
              className="text-white bg-[#f3b857] text-base py-[20px] px-[65px] mt-[70px] text-center rounded-xl "
              to="/contact"
            >
              GET A QUOTE
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
