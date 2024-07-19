import React from "react";
import { TbWorld } from "react-icons/tb";
import { CiDeliveryTruck } from "react-icons/ci";

const reviewItem = [
  {
    id: 0,
    icon: <TbWorld className="h-[22px] w-[22px] text-[#ffffff]" />,
    h4: "Safe & Secure Delivery",
    h5: "Lorem ipsum dolor sit amet consectetur",
    p: "Donec sed eros fermentum, cursus dui eget, bibendum nibh. Donec scelerisque sollicitudin magna, in viverra lacus placerat quis. Maecenas tincidunt nisl scelerisque neque ultrices.",
    h5b: "John Doe",
  },
  {
    id: 1,
    icon: <CiDeliveryTruck className="h-[22px] w-[22px] text-[#ffffff]" />,
    h4: "International Transport",
    h5: "Lorem ipsum dolor sit amet consectetur",
    p: "Donec sed eros fermentum, cursus dui eget, bibendum nibh. Donec scelerisque sollicitudin magna, in viverra lacus placerat quis. Maecenas tincidunt nisl scelerisque neque ultrices.",
    h5b: "John Doe",
  },
];

function Review() {
  return (
    <div className="flex items-center justify-center mb-[100px] ">
      <div className="w-[86%] mt-[-120px] flex-wrap bg-[#ffffff] flex item-center justify-evenly">
        {reviewItem.map((item) => (
          <div
            key={item.id}
            className="sm:h-[320px] h-auto sm:w-[430px] w-[300px]=- px-[20px] py-[40px] mb-[40px]"
          >
            <div className="h-[80px] w-[80px] bg-[#e6e6e6] rounded-[50%] flex items-center justify-center mt-4 mb-5  mx-auto">
              <div>{item.icon}</div>
            </div>
            <h4 className="text-[#000000]  text-[24px] text-center mb-[10px]">
              {item.h4}
            </h4>
            <h5 className="text-[#b2b6b9] text-[16px] text-center mb-[20px]">
              {item.h5}
            </h5>
            <p className="text-[#727272] text-center text-[16px] mb-[21px]">
              {item.p}
            </p>
            <h5 className="text-center text-[#000000] text-[15px]">
              Clint: <b>{item.h5b}</b>
            </h5>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Review;
