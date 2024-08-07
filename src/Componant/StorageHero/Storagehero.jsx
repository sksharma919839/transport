import React from "react";
import { Link } from "react-router-dom";

function Storagehero() {
  return (
    <>
      <div className="pt-[70px] mb-[70px]">
        <div className="vehicle-hero-bg sm:h-[450px] h-[560px]">
          <div className="mx-[50px]">
            <h1 className="text-[48px] sm:pt-[280px] pt-[230px] text-[#ffffff]">
              STORAGE WITH US
            </h1>
            <div className="flex">
              <Link
                to="/transport"
                className="text-[12px] text-[#ffffff] duration-300 transition-all hover:text-[#f3b757] cursor-pointer"
              >
                Home
              </Link>
              <p className="text-[12px] text-[#ffffff]"> / Storage With us</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Storagehero;
