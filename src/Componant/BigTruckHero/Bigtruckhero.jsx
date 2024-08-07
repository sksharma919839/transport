import React from "react";
import { Link } from "react-router-dom";

function Bigtruckhero() {
  return (
    <>
      <div className="pt-[70px] mb-[70px]">
        <div className="vehicle-hero-bg sm:h-[450px] h-[600px]">
          <div className="mx-[50px]">
            <h1 className="text-[48px] sm:pt-[280px] pt-[230px] text-[#ffffff]">
              BIG TRAILER TRUCK
            </h1>
            <div className="flex">
              <Link
                to="/transport"
                className="text-[12px] text-[#ffffff] duration-300 transition-all hover:text-[#f3b757] cursor-pointer"
              >
                Home
              </Link>
              <p className="text-[12px] text-[#ffffff]"> / Big Trailer Truck</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Bigtruckhero;
