import React from "react";
import { Link } from "react-router-dom";

const ourserviceItem = [
  {
    id: 0,
    b: "ROAD FREIGHT",
    h4: "TRANSPORT",
    p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed tortor rutrum, aliquam mauris dolor.",
  },
  {
    id: 1,
    b: "RAIL FREIGHT",
    h4: "TRANSPORT",
    p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed tortor rutrum, aliquam mauris dolor.",
  },
  {
    id: 2,
    b: "SEA FREIGHT",
    h4: "TRANSPORT",
    p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed tortor rutrum, aliquam mauris dolor.",
  },
  {
    id: 3,
    b: "AIR FREIGHT",
    h4: "TRANSPORT",
    p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed tortor rutrum, aliquam mauris dolor.",
  },
];
function Ourservice() {
  return (
    <>
      <div>
        <div className="ourservice-bg h-auto">
          <div className="py-[70px]">
            <h5 className="text-[24px] text-[#f4b757] text-center">
              Our Services
            </h5>
            <h3 className="text-[46px] text-[#000000] text-center">
              The complete <b>solution</b>
            </h3>
          </div>
          <div className="mt-[30px] flex items-center flex-wrap justify-evenly">
            {ourserviceItem.map((item) => (
              <div
                key={item.id}
                className="h-[260px]  mx-[20px] my-[30px] w-[240px]"
              >
                <h4 className="text-[24px] text-center text-[#000000] ">
                  <b>{item.b}</b> {item.h4}
                </h4>
                <p className="my-[20px] text-[16px] text-center text-[#727272]">
                  {item.p}
                </p>
                <Link
                  className="text-[15px] text-center text-[#fbad58] ml-[75px]"
                  to="/"
                >
                  READ MORE
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center py-[50px]">
          <Link to="/service" className="text-[#262626] text-[16px]">
            View all services
          </Link>
        </div>
      </div>
    </>
  );
}

export default Ourservice;
