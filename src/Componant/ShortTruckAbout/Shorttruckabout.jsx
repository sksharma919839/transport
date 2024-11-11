import React from "react";
import aboutImg from "../../Image/portfolio1-2.jpg";
import { Link } from "react-router-dom";

function Shorttruckabout() {
  return (
    <>
      <div className="flex items-center justify-center  mb-[100px]">
        <div className="md:w-[92%] w-full">
          <div className="z-[0]">
            <img className="w-full h-auto" src={aboutImg} alt="" />
          </div>
          <div className="md:flex justify-between">
            <div className="flex">
              <div className="lg:w-[600px] md:w-[500px] pt-[70px] px-[80px] pb-[10px] md:mt-[-160px] mt-[-80px] z-[1] bg-[#ffffff]">
                <h3 className="text-[36px] text-[#000000] mb-[10px]">
                  Safe and on time delivery
                </h3>
                <p className="text-[15px] text-[#727272] my-[20px]">
                  Sit amet dolor adipisicing eiusmod tempor ut labore et dolore
                  magna aliqua minim veniam, quis nostrud exercitation dolor in
                  reprehenderit in voluptate. quis nostrud exercitation ipsum
                  dolor sit amet adipisicing eiusmod tempor elementum ut labore
                  et dolore.
                </p>
              </div>
            </div>
            <div className="mt-[30px] md:ml-0 ml-[80px]">
              <Link
                to="/contact"
                className="bg-[#f3b757] text-[#ffffff] text-[14px] transition-all duration-500 hover:bg-[#ea9813] py-[15px] px-[25px] rounded"
              >
                REQUEST A QUOTE
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Shorttruckabout;
