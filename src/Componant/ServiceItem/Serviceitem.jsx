import React from "react";
import s1 from "../../Image/service3.jpg";
import s2 from "../../Image/service2.jpg";
import s3 from "../../Image/service3.jpg";
import s4 from "../../Image/service4.jpg";
import s5 from "../../Image/service5.jpg";
import s6 from "../../Image/service6.jpg";
import { Link } from "react-router-dom";

const serviceItems = [
  {
    id: 1,
    img: s1,
    h5: "Storage",
    p: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio explicabo repudiandae sed, ratione nisi amet quibusdam blanditiis excepturi aperiam, velit fugit maxime libero, labore reprehenderit!",
    link: "/storage",
  },
  {
    id: 2,
    img: s2,
    h5: "Logistic",
    p: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio explicabo repudiandae sed, ratione nisi amet quibusdam blanditiis excepturi aperiam, velit fugit maxime libero, labore reprehenderit!",
    link: "/logistic",
  },
  {
    id: 3,
    img: s3,
    h5: "Two Service",
    p: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio explicabo repudiandae sed, ratione nisi amet quibusdam blanditiis excepturi aperiam, velit fugit maxime libero, labore reprehenderit!",
    link: "/towservice",
  },
  {
    id: 4,
    img: s4,
    h5: "Passenger Transport",
    p: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio explicabo repudiandae sed, ratione nisi amet quibusdam blanditiis excepturi aperiam, velit fugit maxime libero, labore reprehenderit!",
    link: "/passenger",
  },
  {
    id: 5,
    img: s5,
    h5: "Vehicle Service",
    p: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio explicabo repudiandae sed, ratione nisi amet quibusdam blanditiis excepturi aperiam, velit fugit maxime libero, labore reprehenderit!",
    link: "/vehicleser",
  },
  {
    id: 6,
    img: s6,
    h5: "Transport",
    p: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio explicabo repudiandae sed, ratione nisi amet quibusdam blanditiis excepturi aperiam, velit fugit maxime libero, labore reprehenderit!",
    link: "/transportt",
  },
];
function Serviceitem() {
  return (
    <>
      <div className="flex items-center justify-center mb-[90px]">
        <div className="flex items-center flex-wrap justify-evenly sm:w-[92%] w-[100%]">
          {serviceItems.map((item) => (
            <div
              key={item.id}
              className="lg:w-[360px] w-[300px] mb-[40px] mx-[10px]"
            >
              <img src={item.img} className="w-[100%] h-[268px]" alt="" />
              <div className="px-[10px]">
                <h5 className="text-[20px] text-[#000000] my-[10px]">
                  {item.h5}
                </h5>
                <p className="text-[15px] text-[#727272]  my-[10px]">
                  {item.p}
                </p>
                <Link
                  to={item.link}
                  className="text-[#fbad58] text-[14px] my-[10px]"
                >
                  MORE DETAILS
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Serviceitem;
