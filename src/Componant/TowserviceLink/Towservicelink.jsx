import React from "react";
import { Link, NavLink } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
import { AiOutlineFilePdf } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";
import pdf from "../../Image/chek.pdf";

const towLink = [
  {
    id: "1",
    name: "All services",
    link: "/service",
  },
  {
    id: "2",
    name: "Storage",
    link: "/storage",
  },
  {
    id: "3",
    name: "Logistic",
    link: "/logistic",
  },
  {
    id: "4",
    name: "Passenger transport",
    link: "/passenger",
  },
  {
    id: "5",
    name: "Tow services",
    link: "/towservice",
  },
  {
    id: "6",
    name: "Vehicle services",
    link: "/vehicleser",
  },
  {
    id: "6",
    name: "Transport",
    link: "/transport",
  },
];
function Towservicelink() {
  return (
    <>
      <div>
        <div>
          <h3 className="text-[20px] text-[#000000] mb-[25px] mx-[30px]">
            <b>Navigation</b>
          </h3>
          <ul>
            {towLink.map((links) => (
              <li key={links.id}>
                <NavLink
                  to={links.link}
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? "flex items-center justify-between text-[#f4b757] text-[15px] py-[11px] border-b border-b-[#f4b757] mx-[30px]"
                        : "flex items-center justify-between text-[#848484] text-[15px] py-[11px] border-b border-b-[#848484] mx-[30px] transition-all duration-500 hover:text-[#f4b757] hover:border-b-[#f4b757]"
                    }`
                  }
                >
                  <p>{links.name}</p>
                  <MdKeyboardArrowRight />
                </NavLink>
              </li>
            ))}
          </ul>
          <h3 className="text-[20px] text-[#000000] my-[30px] px-[30px]">
            Download brochures
          </h3>
          <div className="mx-[30px]">
            <Link
              to={pdf}
              download=""
              target="_blank"
              className="flex items-center text-[14px]  text-[#919191] border my-[30px]"
            >
              <div className="w-[49px] h-[49px] flex items-center justify-center border">
                <AiOutlineFilePdf />
              </div>
              <p className="px-[30px]">VEHICLE-LIST.PDF</p>{" "}
              <div className="flex items-center justify-center w-[45px] h-[45px]">
                <MdKeyboardArrowDown size={20} />
              </div>
            </Link>
            <Link
              to={pdf}
              download=""
              target="_blank"
              className="flex items-center text-[14px]  text-[#919191] border"
            >
              <div className="w-[49px] h-[49px] flex items-center justify-center border">
                <AiOutlineFilePdf />
              </div>
              <p className="px-[30px]">CATALOGUE.PDF</p>{" "}
              <div className="flex items-center justify-center w-[45px] h-[45px]">
                <MdKeyboardArrowDown size={20} />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Towservicelink;
