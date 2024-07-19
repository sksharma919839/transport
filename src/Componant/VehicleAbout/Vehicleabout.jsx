import React from "react";
import { Link } from "react-router-dom";

function Vehicleabout() {
  return (
    <>
      <div>
        <div className="my-[100px]">
          <h3 className="text-[32px] text-[#000000] font-semibold text-center">
            Feel free to contact us anytime you need
          </h3>
          <div className="flex items-center justify-center my-[30px]">
            <p className="sm:w-[60%] w-[90%] text-center text-[15px] text-[#727272]">
              Lorem ipsum dolor sit amet adipisicing eiusmod tempor elementum ut
              labore et dolore magna aliqua ad minim veniam, quis nostrud
              exercitation adipisicing labore et dolore.
            </p>
          </div>
          <div className="flex items-center justify-center my-[80px]">
            <Link
              to="/contact"
              className="text-[17px] text-[#ffffff] bg-[#f3b757] py-[15px] px-[41px] rounded-md transition-all duration-700 hover:bg-[#e3aa4e]"
            >
              GET A QOUTE
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Vehicleabout;
