import React from "react";
import { Link } from "react-router-dom";

function Abouthero() {
  return (
    <>
      <div className="pt-[70px] mb-[70px]">
        <div className="service-hero-bg h-[450px]">
          <div className="mx-[50px]">
            <h1 className="text-[48px] sm:pt-[280px] pt-[230px] text-[#ffffff]">
              ABOUT US
            </h1>
            <div className="flex">
              <Link
                to="/"
                className="text-[12px] text-[#ffffff] duration-300 transition-all hover:text-[#f3b757] cursor-pointer"
              >
                Home
              </Link>
              <p className="text-[12px] text-[#ffffff]"> / About us</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Abouthero;