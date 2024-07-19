import React from "react";
import { IoCheckbox } from "react-icons/io5";
import { Link } from "react-router-dom";
import s1 from "../../Image/service-image-1.jpg";
import s2 from "../../Image/service-image-2.jpg";

function Transportdata() {
  return (
    <>
      <div className="my-[100px] flex items-center justify-center">
        <div className="md:w-[92%] w-full">
          <div className="md:flex justify-between">
            <div className="md:w-[55%] w-[90%] md:px-0 px-[30px] my-[40px]">
              <h6 className="text-[#f4b757] text-[18px] my-[10px]">
                Professional warehouse
              </h6>
              <h2 className="text-[36px] text-[#000000]  my-[20px]">
                Warehouse <b>solution</b> for every need
              </h2>
              <h6 className="text-[#000000] text-[18px] mb-[40px]">
                <b>
                  Sit amet adipisicing eiusmod tempor elementum ut labore et
                  dolore magna aliqua minim veniam, quis nostrud exercitation
                  dolor in reprehenderit in voluptate velit esse cillum dolore.
                </b>
              </h6>
              <ul className="mb-[60px]">
                <li className="flex items-center my-[10px]">
                  <IoCheckbox />
                  <span className="text-[16px] text-[#727272] pl-[5px]">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum.
                  </span>
                </li>
                <li className="flex items-center my-[10px]">
                  <IoCheckbox />
                  <span className="text-[16px] text-[#727272] pl-[5px]">
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia.
                  </span>
                </li>
                <li className="flex items-center my-[10px]">
                  <IoCheckbox />
                  <span className="text-[16px] text-[#727272] pl-[5px]">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem.
                  </span>
                </li>
                <li className="flex items-center my-[10px]">
                  <IoCheckbox />
                  <span className="text-[16px] text-[#727272] pl-[5px]">
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur.
                  </span>
                </li>
                <li className="flex items-center my-[10px]">
                  <IoCheckbox />
                  <span className="text-[16px] text-[#727272] pl-[5px]">
                    Consequuntur magni dolores eos qui ratione.
                  </span>
                </li>
                <li className="flex items-center my-[10px]">
                  <IoCheckbox />
                  <span className="text-[16px] text-[#727272] pl-[5px]">
                    Neque porro quisquam est, qui dolorem ipsum quia dolor .
                  </span>
                </li>
                <li className="flex items-center my-[10px]">
                  <IoCheckbox />
                  <span className="text-[16px] text-[#727272] pl-[5px]">
                    Adipisci velit, sed quia non numquam eius modi tempora
                    incidunt.
                  </span>
                </li>
              </ul>
              <p className="text-[#727272] text-[15px] mb-[50px]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt et dolore magna aliqua enim minim
                veniam, quis nostrud exercitation ullamco nisi ut aliquip ex ea
                commodo consequat.
              </p>
              <Link
                to="/"
                className="text-[15px] bg-[#f3b757] py-[15px] px-[25px] text-[#ffffff] rounded duration-500 transition-all hover:bg-[#e09a29]"
              >
                CONTACT US
              </Link>
            </div>
            <div className="md:w-[35%]">
              <div className="mb-[30px]">
                <img src={s1} className="w-full" alt="" />
              </div>
              <div>
                <img src={s2} className="w-full" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Transportdata;
