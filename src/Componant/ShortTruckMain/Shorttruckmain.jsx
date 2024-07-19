import React from "react";
import ImageLeft from "../../Image/image-left-4.jpg";
import { IoCheckbox } from "react-icons/io5";

function Shorttruckmain() {
  return (
    <>
      <div className="flex items-center justify-center pb-[50px] mb-[50px] border-b">
        <div className="md:w-[92%] w-full md:flex items-center ">
          <div>
            <img
              src={ImageLeft}
              className="lg:w-[585px] md:w-[485px] lg:h-[953px] md:h-[1106px]"
              alt=""
            />
          </div>
          <div className="lg:w-[723px] md:w-[600px] lg:h-[745px] md:h-[870px] lg:py-[125px] py-[100px] sm:px-[80px] px-[30px] lg:ml-[-180px] md:ml-[-120px] bg-[#ffffff]">
            <h4 className="text-[36px] text-[#000000] pb-[15px]">
              Leading logistic service
            </h4>
            <p className="text-[18px] text-[#000000] pb-[20px]">
              Sit amet adipisicing eiusmod tempor elementum ut labore et dolore
              magna aliqua ad minim veniam, quis nostrud exercitation.
            </p>
            <p className="text-[15px] text-[#727272] pb-[40px]">
              Lorem ipsum dolor sit amet adipisicing eiusmod tempor elementum ut
              labore et dolore magna aliqua ad minim veniam, quis nostrud
              exercitation. Lorem ipsum dolor sit amet adipisicing eiusmod
              tempor elementum ut labore et dolore.
            </p>
            <div>
              <ul>
                <li className="flex items-center my-[10px]">
                  <IoCheckbox />
                  <span className="text-[15px] text-[#727272] pl-[5px]">
                    Duis aute irure dolor in reprehenderit in voluptate.
                  </span>
                </li>
                <li className="flex items-center my-[10px]">
                  <IoCheckbox />
                  <span className="text-[15px] text-[#727272] pl-[5px]">
                    Excepteur sint occaecat cupidatat non proident, sunt.
                  </span>
                </li>
                <li className="flex items-center my-[10px]">
                  <IoCheckbox />
                  <span className="text-[15px] text-[#727272] pl-[5px]">
                    Sed ut perspiciatis unde omnis iste natus.
                  </span>
                </li>
                <li className="flex items-center my-[10px]">
                  <IoCheckbox />
                  <span className="text-[15px] text-[#727272] pl-[5px]">
                    Nemo enim ipsam voluptatem quia.
                  </span>
                </li>
                <li className="flex items-center my-[10px]">
                  <IoCheckbox />
                  <span className="text-[15px] text-[#727272] pl-[5px]">
                    Consequuntur magni dolores eos qui ratione.
                  </span>
                </li>
                <li className="flex items-center my-[10px]">
                  <IoCheckbox />
                  <span className="text-[15px] text-[#727272] pl-[5px]">
                    Adipisci velit, sed quia non numquam eius.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Shorttruckmain;
