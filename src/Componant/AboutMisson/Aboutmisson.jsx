import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoCheckbox } from "react-icons/io5";
import { Link } from "react-router-dom";

function Aboutmisson() {
  return (
    <>
      <div className="flex items-center justify-center mb-[100px]">
        <div className="flex items-center justify-evenly flex-wrap md:w-[92%]  w-[100%]">
          <div className="w-[300px]">
            <div className="my-[100px]">
              <h4 className="text-[24px] text-[#000000] my-[15px]">
                Our Mission
              </h4>
              <p className="text-[15px] text-[#727272] my-[15px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                deleniti error dolor maiores totam doloribus, accusantium
                deserunt, voluptas, corrupti quisquam esse nihil unde ad cum!
              </p>
              <div className="text-[14px] text-[#fbad58] flex items-center my-[30px]">
                <IoIosArrowForward />
                <Link to="/">MORE DETAILS</Link>
              </div>
            </div>
          </div>
          <div className="w-[300px]">
            <div className="my-[100px] ">
              <h4 className="text-[24px] text-[#000000] my-[15px]">
                Our Vision
              </h4>
              <p className="text-[15px] text-[#727272] my-[15px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                deleniti error dolor maiores totam doloribus, accusantium
                deserunt, voluptas, corrupti quisquam esse nihil unde ad cum!
              </p>
              <div className="text-[14px] text-[#fbad58] flex items-center my-[30px]">
                <IoIosArrowForward />
                <Link to="/">MORE DETAILS</Link>
              </div>
            </div>
          </div>
          <div className="w-[300px] px-[30px] py-[50px] border border-[10px]">
            <p className="text-[20px] text-[#727272]">Professional Services</p>
            <h4 className="text-[28px] text-[#000000]">24 Hours Support</h4>
            <ul>
              <li className="flex items-center my-[10px]">
                <IoCheckbox />
                <span className="text-[15px] text-[#727272] pl-[5px]">
                  Magna risus vehi augue
                </span>
              </li>
              <li className="flex items-center my-[10px]">
                <IoCheckbox />
                <span className="text-[15px] text-[#727272] pl-[5px]">
                  Facilisis magna risus
                </span>
              </li>
              <li className="flex items-center my-[10px]">
                <IoCheckbox />
                <span className="text-[15px] text-[#727272] pl-[5px]">
                  Dolor sit ametconse ctetur
                </span>
              </li>
              <li className="flex items-center my-[10px]">
                <IoCheckbox />
                <span className="text-[15px] text-[#727272] pl-[5px]">
                  Ametconse ctetur adipis
                </span>
              </li>
              <li className="flex items-center my-[10px]">
                <IoCheckbox />
                <span className="text-[15px] text-[#727272] pl-[5px]">
                  Facilisis magna risus
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Aboutmisson;
