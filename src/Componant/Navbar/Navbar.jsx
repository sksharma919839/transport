import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../Image/logo.png";
import { RiMenu3Fill } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";

const navbarItems = [
  {
    id: 1,
    Link: "/",
    name: "HOME",
  },
  {
    id: 2,
    Link: "/Vehicle",
    name: "VEHICLE FLEET",
  },
  {
    id: 3,
    Link: "/service",
    name: "SERVICES",
  },
  {
    id: 4,
    Link: "/about",
    name: "ABOUT US",
  },
  {
    id: 5,
    Link: "/contact",
    name: "CONTACT US",
  },
];
function Navbar() {
  const [open, setOpen] = useState(false);
  const clickOnMenu = () => {
    setOpen(!open);
  };
  return (
    <>
      <div>
        <div className="h-[74px] flex items-center px-[30px] bg-[#ffffff] w-[100%] fixed justify-between z-[2]">
          <div>
            <Link to="/">
              <img src={Logo} alt="" />
            </Link>
          </div>
          <div>
            <ul className=" hidden lg:flex items-center  justify-evenly">
              {navbarItems.map((items) => (
                <li key={items.id} className="px-[15px] border-r ">
                  <NavLink
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? "text-[#f4b757]  cursor-pointer text-[15px] py-[10px] border-b border-b-[#f4b757] hover:text-[#f4b757] hover:border-b hover:border-b-[#f4b757]"
                          : "text-[#000000] cursor-pointer transition-all duration-300 text-[15px] hover:text-[#f4b757] hover:border-b hover:border-b-[#f4b757] py-[10px]"
                      }`
                    }
                    to={items.Link}
                  >
                    {items.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:hidden" onClick={clickOnMenu}>
            {open ? (
              <IoCloseSharp
                size={35}
                className="bg-[#f4b757] p-[5px] rounded-lg text-[#ffffff]"
              />
            ) : (
              <RiMenu3Fill
                size={35}
                className="bg-[#f4b757] text-[#ffffff] rounded-lg p-[5px]"
              />
            )}
          </div>
          {/* Responsive Design */}
          {/* <ul
            className={
              open
                ? "lg:hidden fixed left-0 top-[7px] w-[100%] h-full bg-[#0f0f0f] ease-in-out"
                : " ease-in-out w-[50%] top-[-100%] fixed bottom-0"
            }
          >
            <div>
              <ul className="md:mx-[320px] sm:mx-[250px] mx-[100px]">
                {navbarItems.map((items) => (
                  <li key={items.id} className="py-[15px]">
                    <NavLink
                      className={({ isActive }) =>
                        `${
                          isActive
                            ? "text-[#f4b757] text-[15px] py-[10px] border-b border-b-[#f4b757]"
                            : "text-[#ffffff] transition-all duration-300 text-[15px] hover:text-[#f4b757] hover:border-b hover:border-b-[#f4b757] py-[10px]"
                        }`
                      }
                      to={items.Link}
                    >
                      {items.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </ul> */}
        </div>
      </div>
    </>
  );
}

export default Navbar;
