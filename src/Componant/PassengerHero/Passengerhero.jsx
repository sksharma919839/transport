import React from "react";
import { Link } from "react-router-dom";

function Passengerhero() {
  return (
    <>
      <div className="pt-[70px] mb-[70px]">
        <div className="passenger-hero-bg h-[450px]">
          <div className="mx-[50px]">
            <h1 className="sm:text-[48px] text-[36px] sm:pt-[280px] pt-[230px] text-[#ffffff]">
              PASSENGER TRANSPORT
            </h1>
            <div className="flex">
              <Link
                to="/transport"
                className="text-[12px] text-[#ffffff] duration-300 transition-all hover:text-[#f3b757] cursor-pointer"
              >
                Home
              </Link>
              <p className="text-[12px] text-[#ffffff]">
                {" "}
                / Passenger Transport
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Passengerhero;
