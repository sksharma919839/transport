import React from "react";
import { Link } from "react-router-dom";

function Bushero() {
  return (
    <>
      <div className="pt-[70px] mb-[70px]">
        <div className="vehicle-hero-bg h-[450px]">
          <div className="mx-[50px]">
            <h1 className="text-[48px] sm:pt-[280px] pt-[230px] text-[#ffffff]">
              BUS TRANSPORT
            </h1>
            <div className="flex">
              <Link
                to="/"
                className="text-[12px] text-[#ffffff] duration-300 transition-all hover:text-[#f3b757] cursor-pointer"
              >
                Home
              </Link>
              <p className="text-[12px] text-[#ffffff]"> / Bus Transport</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Bushero;
