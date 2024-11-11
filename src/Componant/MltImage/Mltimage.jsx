import React from "react";
import Image1 from "../../Image/about-img-1.jpg";
import Image2 from "../../Image/about-img-2.jpg";
import Image3 from "../../Image/about-img-3.jpg";

function Mltimage() {
  return (
    <>
      <div className="flex items-center justify-center mb-[100px]">
        <div className="md:w-[92%] w-full  md:flex items-center justify-between">
          <div>
            <img
              src={Image1}
              className="lg:w-[570px] md:w-[470px] lg:h-[646px] md:h-[533px] md:mb-[0] mb-[30px]"
              alt=""
            />
          </div>
          <div className="ml-[10px]">
            <img
              src={Image2}
              className="lg:w-[570px] md:w-[470px] lg:h-[311px] md:h-[256px] mb-[25px]"
              alt=""
            />
            <img
              src={Image3}
              className="lg:w-[570px] md:w-[470px] lg:h-[311px] md:h-[256px]"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Mltimage;
