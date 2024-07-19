import React from "react";
import ImageLeft from "../../Image/image-left-1.jpg";
import signature from "../../Image/signature.jpg";

function Aboutvalue() {
  return (
    <>
      <div className="flex items-center justify-center mb-[100px]">
        <div className="md:w-[92%] w-full md:flex items-center ">
          <div>
            <img
              src={ImageLeft}
              className="lg:w-[585px] md:w-[485px] lg:h-[781px] md:h-[806px]"
              alt=""
            />
          </div>
          <div className="lg:w-[723px] md:w-[600px] lg:h-[645px] md:h-[670px] lg:py-[125px] py-[100px] sm:px-[80px] px-[30px] lg:ml-[-180px] md:ml-[-120px] bg-[#ffffff]">
            <h4 className="text-[32px] text-[#000000] pb-[15px]">
              Our company core values
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
            <div className="flex items-center justify-evenly">
              <p className="text-[15px] text-[#727272] w-[50%]">
                <b className="text-[15px] text-[#000000]">Johan Doe</b>
                <br />
                Chief Executive Officer
              </p>
              <div className="w-[50%]">
                <img className="w-[132px] h-[57px]" src={signature} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Aboutvalue;
