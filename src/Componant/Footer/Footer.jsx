import React from "react";
import { NavLink, Link } from "react-router-dom";
import { TiSocialFacebook } from "react-icons/ti";
import { FaTwitter } from "react-icons/fa";

const footAbout = [
  {
    id: 1,
    name: "About us",
    link: "/about",
  },
  {
    id: 2,
    name: "Vehicle fleet",
    link: "/vehicle",
  },
  {
    id: 3,
    name: "Vehicle Service",
    link: "/vehicleser",
  },
  {
    id: 4,
    name: "Contact us",
    link: "/contact",
  },
];

const footNavigation = [
  {
    id: 1,
    link: "/transport",
    name: "Home",
  },
  {
    id: 2,
    link: "/transportt",
    name: "Transport",
  },
  {
    id: 3,
    link: "/towservice",
    name: "Two Service",
  },
  {
    id: 4,
    link: "/passenger",
    name: "Passenger Transport",
  },
];

const footResorce = [
  {
    id: 1,
    link: "/shorttruck",
    name: "Short trucks",
  },
  {
    id: 2,
    link: "/mainloadtruck",
    name: "Main load truck",
  },
  {
    id: 3,
    link: "/maintruck",
    name: "Main truck",
  },
  {
    id: 4,
    link: "/bigtruck",
    name: "Big trailer truck",
  },
  {
    id: 5,
    link: "/vandelevery",
    name: "Van delivery",
  },
];

function Footer() {
  return (
    <>
      <div className="h-auto w-full">
        <div className="bg-[#25272a] h-auto flex-wrap flex py-[90px] justify-evenly">
          <div className="mx-[30px] my-[20px]">
            <div className=" mb-[40px]">
              <h6 className="text-white text-[19px] mb-[10px]">
                ABOUT COMPANY
              </h6>
            </div>
            <ul>
              {footAbout.map((item) => (
                <li key={item.id} className="mb-[15px]">
                  <NavLink
                    to={item.link}
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? "text-[16px] text-[#ffffff]"
                          : "text-[16px] text-[#8c8f92] transition-all duration-500 hover:text-[#f3b757]"
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="mx-[30px] my-[20px]">
            <div className=" mb-[40px]">
              <h6 className="text-white text-[19px] mb-[10px]">NAVIGATION</h6>
            </div>
            <ul>
              {footNavigation.map((item) => (
                <li key={item.id} className="mb-[15px]">
                  <NavLink
                    to={item.link}
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? "text-[16px] text-[#ffffff]"
                          : "text-[16px] text-[#8c8f92] transition-all duration-500 hover:text-[#f3b757]"
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="mx-[30px] my-[20px]">
            <div className="mb-[40px]">
              <h6 className="text-white text-[19px] mb-[10px]">RESOURCES</h6>
            </div>
            <ul>
              {footResorce.map((item) => (
                <li key={item.id} className="mb-[15px]">
                  <NavLink
                    to={item.link}
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? "text-[16px] text-[#ffffff]"
                          : "text-[16px] text-[#8c8f92] transition-all duration-500 hover:text-[#f3b757]"
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-[300px] mx-[30px] my-[20px]">
            <div className="mb-[40px]">
              <h6 className="text-white text-[19px] mb-[10px]">OUR CONTACTS</h6>
            </div>
            <div>
              <p className="text-[16px] text-[#8c8f92] mb-[20px]">
                <b className="text-[#ffffff]">Address: </b>Transport ltd. inc.
                300 Pennsylvania Ave NW, Washington
              </p>
              <p className="text-[16px] text-[#8c8f92] mb-[20px]">
                <b className="text-[#ffffff]">Phone: </b>+386 40 222 455
              </p>
              <p className="text-[16px] text-[#8c8f92] mb-[20px]">
                <b className="text-[#ffffff]">Email: </b>mail@companyname.com
              </p>
              <div className="flex ">
                <TiSocialFacebook size={30} className="text-[#ffffff]" />
                <FaTwitter size={30} className="ml-[20px] text-[#ffffff]" />
              </div>
            </div>
          </div>
        </div>
        <div className="h-[80px] bg-[#13171b] flex items-center justify-center">
          <p className="text-[#505357] ">
            Transport WordPress theme | © 2018 Transport, All rights reserved
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
