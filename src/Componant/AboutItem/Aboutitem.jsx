import React from "react";
import { Link } from "react-router-dom";
import team1 from "../../Image/team1.jpg";
import team2 from "../../Image/team2.jpg";
import team3 from "../../Image/team3.jpg";
import team4 from "../../Image/team4.jpg";

function Aboutitem() {
  return (
    <>
      <div className="flex items-center justify-center mb-[100px]">
        <div className="md:w-[92%] w-full">
          <div>
            <h5 className="text-[20px] text-[#f4b757] pb-[10px]">
              Professional Team
            </h5>
            <h3 className="text-[42px] text-[#000000] pb-[15px]">
              Meet our <b>dedicated</b> team
            </h3>
          </div>
          <div className="flex items-center justify-evenly flex-wrap">
            <div className="pb-[30px] border-b">
              <div className="about-box relative w-[262px] h-[255px] my-[20px] mx-[10px] transition-all duration-500 overflow-hidden">
                <img
                  src={team1}
                  className="w-[364px] h-[270px] about-box-img"
                  alt=""
                />
                <div className="about-box-item w-full h-0 absolute left-0 bottom-0 flex-wrap overflow-hidden px-[15px] transition-all duration-500">
                  <p className="text-[#727272] py-[25px] px-[10px]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Rerum, nemo illum! Iste non facere minima repellendus ipsum,
                    impedit inventore quas rerum harum.
                  </p>
                </div>
              </div>
              <h2 className="text-[17px] text-[#000000] text-center mb-[10px]">
                <b>John Top</b>
              </h2>
              <p className="text-[13px] text-[#727272] text-center">CEO</p>
            </div>
            <div className="pb-[30px] border-b">
              <div className="about-box relative w-[262px] h-[255px] my-[20px] mx-[10px] transition-all duration-500 overflow-hidden">
                <img
                  src={team2}
                  className="w-[364px] h-[270px] about-box-img"
                  alt=""
                />
                <div className="about-box-item w-full h-0 absolute left-0 bottom-0 flex-wrap overflow-hidden px-[15px] transition-all duration-500">
                  <p className="text-[#727272] py-[25px] px-[10px]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Rerum, nemo illum! Iste non facere minima repellendus ipsum,
                    impedit inventore quas rerum harum.
                  </p>
                </div>
              </div>
              <h2 className="text-[17px] text-[#000000] text-center mb-[10px]">
                <b>Paul King</b>
              </h2>
              <p className="text-[13px] text-[#727272] text-center">
                Dispatching
              </p>
            </div>
            <div className="pb-[30px] border-b">
              <div className="about-box relative w-[262px] h-[255px] my-[20px] mx-[10px] transition-all duration-500 overflow-hidden">
                <img
                  src={team3}
                  className="w-[364px] h-[270px] about-box-img"
                  alt=""
                />
                <div className="about-box-item w-full h-0 absolute left-0 bottom-0 flex-wrap overflow-hidden px-[15px] transition-all duration-500">
                  <p className="text-[#727272] py-[25px] px-[10px]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Rerum, nemo illum! Iste non facere minima repellendus ipsum,
                    impedit inventore quas rerum harum.
                  </p>
                </div>
              </div>
              <h2 className="text-[17px] text-[#000000] text-center mb-[10px]">
                <b>George Road</b>
              </h2>
              <p className="text-[13px] text-[#727272] text-center">
                Driver Manager
              </p>
            </div>
            <div className="pb-[30px] border-b">
              <div className="about-box relative w-[262px] h-[255px] my-[20px] mx-[10px] transition-all duration-500 overflow-hidden">
                <img
                  src={team4}
                  className="w-[364px] h-[270px] about-box-img"
                  alt=""
                />
                <div className="about-box-item w-full h-0 absolute left-0 bottom-0 flex-wrap overflow-hidden px-[15px] transition-all duration-500">
                  <p className="text-[#727272] py-[25px] px-[10px]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Rerum, nemo illum! Iste non facere minima repellendus ipsum,
                    impedit inventore quas rerum harum.
                  </p>
                </div>
              </div>
              <h2 className="text-[17px] text-[#000000] text-center mb-[10px]">
                <b>John Stors</b>
              </h2>
              <p className="text-[13px] text-[#727272] text-center">
                Warehouse Manager
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Aboutitem;
