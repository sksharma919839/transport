import React from "react";
import ImageRight from "../../Image/image-left-5.jpg";
import { Link } from "react-router-dom";

function Aboutcontact() {
  return (
    <>
      <div className="flex items-center justify-center mb-[100px]">
        <div className="md:w-[92%] w-full md:flex items-center ">
          <div className="lg:w-[723px] md:w-[600px] lg:h-[645px] md:h-[670px] lg:py-[125px] py-[100px] sm:px-[80px] px-[30px] lg:mr-[-180px] md:mr-[-120px] bg-[#ffffff] z-[1]">
            <h4 className="text-[32px] text-[#000000] pb-[15px]">
              Safe and on time delivery of your <br /> goods dolor sit amet
            </h4>
            <p className="text-[18px] text-[#727272] pb-[20px]">
              Sit amet adipisicing eiusmod tempor elementum ut labore et dolore
              magna aliqua ad minim veniam, quis nostrud exercitation.
            </p>
            <p className="text-[18px] text-[#727272] pb-[40px]">
              Lorem ipsum dolor sit amet adipisicing eiusmod tempor elementum ut
              labore et dolore magna aliqua ad minim veniam, quis nostrud
              exercitation. Lorem ipsum dolor sit amet adipisicing eiusmod
              tempor elementum ut labore et dolore.
            </p>
            <Link
              to="/contact"
              className="text-[15px] text-[#ffffff] bg-[#f3b757] py-[12px] px-[25px] rounded-sm transition-all duration-500 hover:bg-[#bc8936]"
            >
              GET A QUOTE
            </Link>
          </div>
          <div>
            <img
              src={ImageRight}
              className="lg:w-[585px] md:w-[485px] lg:h-[781px] md:h-[806px] z-0"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Aboutcontact;
