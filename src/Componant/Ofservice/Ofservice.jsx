import React from "react";
import ser1 from "../../Image/ser-1.jpg";
import ser2 from "../../Image/ser-2.jpg";
import ser3 from "../../Image/ser-3.jpg";
import { Link } from "react-router-dom";

const ofserviceItem = [
  {
    id: 1,
    img: ser1,
    h: "We ensures you the best quality services",
    p: "Lorem ipsum dolor sit amet adipisicing eiusmod tempor elementum ut labore et dolore magna aliqua ad minim veniam, nostrud quis exercitation.",
  },
  {
    id: 2,
    img: ser2,
    h: "Safe and on time delivery of your goods",
    p: "Lorem ipsum dolor sit amet adipisicing eiusmod tempor elementum ut labore et dolore magna aliqua ad minim veniam, nostrud quis exercitation.",
  },
  {
    id: 3,
    img: ser3,
    h: "Very careful handling of valuable goods",
    p: "Lorem ipsum dolor sit amet adipisicing eiusmod tempor elementum ut labore et dolore magna aliqua ad minim veniam, nostrud quis exercitation.",
  },
];
function Ofservice() {
  return (
    <>
      <div className="flex items-center justify-evenly flex-wrap mb-[100px]">
        {ofserviceItem.map((items) => (
          <div
            key={items.id}
            className="h-[510px] mx-[10px] my-[30px] flex-wrap w-[340px]"
          >
            <img src={items.img} className="h-[240px] w-[340px]" alt="" />
            <h4 className="text-[24px] mt-[20px]">{items.h}</h4>
            <p className="text-[18px] text-[#727272] mb-[30px]">{items.p}</p>
            <Link className="text-[#fbad58]" to="/transport">
              READ MORE
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default Ofservice;
