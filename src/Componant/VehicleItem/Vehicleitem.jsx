import React, { useState } from "react";
import v1 from "../../Image/v1.jpg";
import v2 from "../../Image/v2.jpg";
import v3 from "../../Image/v3.jpg";
import v4 from "../../Image/v4.jpg";
import v5 from "../../Image/v5.jpg";
import v6 from "../../Image/v6.jpg";
import v7 from "../../Image/v7.jpg";
import v8 from "../../Image/v8.jpg";
import v9 from "../../Image/v9.jpg";
import { Link } from "react-router-dom";

function Vehicleitem() {
  const [openTab, setOpenTab] = useState(0);
  const tabClick = (index) => {
    setOpenTab(index);
  };
  return (
    <>
      <div>
        <div className="flex items-center justify-center mb-[40px]">
          <div className="flex sm:w-[90%] w-[95%] border">
            <div>
              <button
                className={
                  openTab === 0
                    ? "text-[14px] text-[#f4b757] border bg-[#f8f8f8] sm:px-[19px] px-[8[x] py-[17px]"
                    : "text-[14px] text-[#000000] border bg-[#ffffff] sm:px-[19px] px-[8px] py-[17px]"
                }
                onClick={() => tabClick(0)}
              >
                All
              </button>
            </div>
            <div>
              <button
                className={
                  openTab === 1
                    ? "text-[14px] text-[#f4b757] border bg-[#f8f8f8] sm:px-[19px] px-[8px] py-[17px]"
                    : "text-[14px] text-[#000000] border bg-[#ffffff] sm:px-[19px] px-[8px] py-[17px]"
                }
                onClick={() => tabClick(1)}
              >
                Short trucks
              </button>
            </div>
            <div>
              <button
                className={
                  openTab === 2
                    ? "text-[14px] text-[#f4b757] border bg-[#f8f8f8] sm:px-[19px] px-[8px] py-[17px]"
                    : "text-[14px] text-[#000000] border bg-[#ffffff] sm:px-[19px] px-[8px] py-[17px]"
                }
                onClick={() => tabClick(2)}
              >
                Prime trucks
              </button>
            </div>
            <div>
              <button
                className={
                  openTab === 3
                    ? "text-[14px] text-[#f4b757] border bg-[#f8f8f8] sm:px-[19px] px-[8px] py-[17px]"
                    : "text-[14px] text-[#000000] border bg-[#ffffff] sm:px-[19px] px-[8px] py-[17px]"
                }
                onClick={() => tabClick(3)}
              >
                Vans
              </button>
            </div>
            <div>
              <button
                className={
                  openTab === 4
                    ? "text-[14px] text-[#f4b757] border bg-[#f8f8f8] sm:px-[19px] px-[8px] py-[17px]"
                    : "text-[14px] text-[#000000] border bg-[#ffffff] sm:px-[19px] px-[8px] py-[17px]"
                }
                onClick={() => tabClick(4)}
              >
                Big load trucks
              </button>
            </div>
          </div>
        </div>
        <div className="border-b pb-[40px] mb-[80px]">
          {openTab === 0 && (
            <div className="flex items-center justify-center">
              <div className="flex sm:w-[92%] w-[100%] items-center justify-evenly flex-wrap">
                <div className="box relative md:w-[364px] w-[300px] h-[270px] my-[20px] mx-[10px] transition-all duration-500">
                  <img src={v1} className="w-[364px] h-[270px] " alt="" />
                  <div className="box-item w-full h-0 absolute left-0 bottom-0 flex-wrap overflow-hidden px-[15px] transition-all duration-500">
                    <p className="text-[18px] text-[#ffffff] font-medium pt-[170px]  pb-[20px]">
                      Short trucks
                    </p>
                    <Link
                      to="/shorttruck"
                      className="bg-[#f4b757] py-[8px] px-[15px] text-[#ffffff] rounded"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
                <div className="box relative md:w-[364px] w-[300px] h-[270px] transition-all duration-500 my-[20px] mx-[10px]">
                  <img src={v2} className="w-[364px] h-[270px] " alt="" />
                  <div className="box-item w-full h-0 absolute left-0 bottom-0 flex-wrap overflow-hidden px-[15px] transition-all duration-500">
                    <p className="text-[18px] text-[#ffffff] font-medium pt-[170px]  pb-[20px]">
                      Main load trucks
                    </p>
                    <Link
                      to="/mainloadtruck"
                      className="bg-[#f4b757] py-[8px] px-[15px] text-[#ffffff] rounded"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
                <div className="box relative md:w-[364px] w-[300px] h-[270px] transition-all duration-500 my-[20px] mx-[10px]">
                  <img src={v3} className="w-[364px] h-[270px] " alt="" />
                  <div className="box-item w-full h-0 absolute left-0 bottom-0 flex-wrap overflow-hidden px-[15px] transition-all duration-500">
                    <p className="text-[18px] text-[#ffffff] font-medium pt-[170px]  pb-[20px]">
                      Main trucks
                    </p>
                    <Link
                      to="/maintruck"
                      className="bg-[#f4b757] py-[8px] px-[15px] text-[#ffffff] rounded"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
                <div className="box relative md:w-[364px] w-[300px] h-[270px] transition-all duration-500 my-[20px] mx-[10px]">
                  <img src={v4} className="w-[364px] h-[270px] " alt="" />
                  <div className="box-item w-full h-0 absolute left-0 bottom-0 flex-wrap overflow-hidden px-[15px] transition-all duration-500">
                    <p className="text-[18px] text-[#ffffff] font-medium pt-[170px]  pb-[20px]">
                      Big trailer truck
                    </p>
                    <Link
                      to="/bigtruck"
                      className="bg-[#f4b757] py-[8px] px-[15px] text-[#ffffff] rounded"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
                <div className="box relative md:w-[364px] w-[300px] h-[270px] transition-all duration-500 my-[20px] mx-[10px]">
                  <img src={v5} className="w-[364px] h-[270px] " alt="" />
                  <div className="box-item w-full h-0 absolute left-0 bottom-0 flex-wrap overflow-hidden px-[15px] transition-all duration-500">
                    <p className="text-[18px] text-[#ffffff] font-medium pt-[170px]  pb-[20px]">
                      Van delivery
                    </p>
                    <Link
                      to="/vandelevery"
                      className="bg-[#f4b757] py-[8px] px-[15px] text-[#ffffff] rounded"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
                <div className="box relative md:w-[364px] w-[300px] h-[270px] transition-all duration-500 my-[20px] mx-[10px]">
                  <img src={v6} className="w-[364px] h-[270px] " alt="" />
                  <div className="box-item w-full h-0 absolute left-0 bottom-0 flex-wrap overflow-hidden px-[15px] transition-all duration-500">
                    <p className="text-[18px] text-[#ffffff] font-medium pt-[170px]  pb-[20px]">
                      Veteran fleet
                    </p>
                    <Link
                      to="/veteran"
                      className="bg-[#f4b757] py-[8px] px-[15px] text-[#ffffff] rounded"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
                <div className="box relative md:w-[364px] w-[300px] h-[270px] transition-all duration-500 my-[20px] mx-[10px]">
                  <img src={v7} className="w-[364px] h-[270px] " alt="" />
                  <div className="box-item w-full h-0 absolute left-0 bottom-0 flex-wrap overflow-hidden px-[15px] transition-all duration-500">
                    <p className="text-[18px] text-[#ffffff] font-medium pt-[170px]  pb-[20px]">
                      Big load truck
                    </p>
                    <Link
                      to="/bigloadtruck"
                      className="bg-[#f4b757] py-[8px] px-[15px] text-[#ffffff] rounded"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
                <div className="box relative md:w-[364px] w-[300px] h-[270px] transition-all duration-500 my-[20px] mx-[10px]">
                  <img src={v8} className="w-[364px] h-[270px] " alt="" />
                  <div className="box-item w-full h-0 absolute left-0 bottom-0 flex-wrap overflow-hidden px-[15px] transition-all duration-500">
                    <p className="text-[18px] text-[#ffffff] font-medium pt-[170px]  pb-[20px]">
                      Storage with us
                    </p>
                    <Link
                      to="/storagewith"
                      className="bg-[#f4b757] py-[8px] px-[15px] text-[#ffffff] rounded"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
                <div className="box relative md:w-[364px] w-[300px] h-[270px] transition-all duration-500 my-[20px] mx-[10px]">
                  <img src={v9} className="w-[364px] h-[270px] " alt="" />
                  <div className="box-item w-full h-0 absolute left-0 bottom-0 flex-wrap overflow-hidden px-[15px] transition-all duration-500">
                    <p className="text-[18px] text-[#ffffff] font-medium pt-[170px]  pb-[20px]">
                      Bus Transport
                    </p>
                    <Link
                      to="/bustransport"
                      className="bg-[#f4b757] py-[8px] px-[15px] text-[#ffffff] rounded"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
          {openTab === 1 && (
            <div className="flex items-center justify-center">
              <div className="flex sm:w-[92%] w-[100%] items-center flex-wrap">
                <div className="box relative md:w-[364px] w-[300px] h-[270px] my-[20px] mx-[10px] transition-all duration-500">
                  <img src={v1} className="w-[364px] h-[270px] " alt="" />
                  <div className="box-item w-full h-0 absolute left-0 bottom-0 flex-wrap overflow-hidden px-[15px] transition-all duration-500">
                    <p className="text-[18px] text-[#ffffff] font-medium pt-[170px]  pb-[20px]">
                      Short trucks
                    </p>
                    <Link
                      to="/shorttruck"
                      className="bg-[#f4b757] py-[8px] px-[15px] text-[#ffffff] rounded"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
                <div className="box relative md:w-[364px] w-[300px] h-[270px] transition-all duration-500 my-[20px] mx-[10px]">
                  <img src={v5} className="w-[364px] h-[270px] " alt="" />
                  <div className="box-item w-full h-0 absolute left-0 bottom-0 flex-wrap overflow-hidden px-[15px] transition-all duration-500">
                    <p className="text-[18px] text-[#ffffff] font-medium pt-[170px]  pb-[20px]">
                      Van delivery
                    </p>
                    <Link
                      to="/vandelevery"
                      className="bg-[#f4b757] py-[8px] px-[15px] text-[#ffffff] rounded"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
          {openTab === 2 && (
            <div className="flex items-center justify-center">
              <div className="flex items-center flex-wrap sm:w-[92%] w-[100%]">
                <div className="box relative md:w-[364px] w-[300px] h-[270px] my-[20px] mx-[10px] transition-all duration-500">
                  <img src={v1} className="w-[364px] h-[270px] " alt="" />
                  <div className="box-item w-full h-0 absolute left-0 bottom-0 flex-wrap overflow-hidden px-[15px] transition-all duration-500">
                    <p className="text-[18px] text-[#ffffff] font-medium pt-[170px]  pb-[20px]">
                      Short trucks
                    </p>
                    <Link
                      to="/shorttruck"
                      className="bg-[#f4b757] py-[8px] px-[15px] text-[#ffffff] rounded"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
                <div className="box relative md:w-[364px] w-[300px] h-[270px] transition-all duration-500 my-[20px] mx-[10px]">
                  <img src={v3} className="w-[364px] h-[270px] " alt="" />
                  <div className="box-item w-full h-0 absolute left-0 bottom-0 flex-wrap overflow-hidden px-[15px] transition-all duration-500">
                    <p className="text-[18px] text-[#ffffff] font-medium pt-[170px]  pb-[20px]">
                      Main trucks
                    </p>
                    <Link
                      to="/maintruck"
                      className="bg-[#f4b757] py-[8px] px-[15px] text-[#ffffff] rounded"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
                <div className="box relative md:w-[364px] w-[300px] h-[270px] transition-all duration-500 my-[20px] mx-[10px]">
                  <img src={v4} className="w-[364px] h-[270px] " alt="" />
                  <div className="box-item w-full h-0 absolute left-0 bottom-0 flex-wrap overflow-hidden px-[15px] transition-all duration-500">
                    <p className="text-[18px] text-[#ffffff] font-medium pt-[170px]  pb-[20px]">
                      Big trailer truck
                    </p>
                    <Link
                      to="/bigtruck"
                      className="bg-[#f4b757] py-[8px] px-[15px] text-[#ffffff] rounded"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
                <div className="box relative md:w-[364px] w-[300px] h-[270px] transition-all duration-500 my-[20px] mx-[10px]">
                  <img src={v5} className="w-[364px] h-[270px] " alt="" />
                  <div className="box-item w-full h-0 absolute left-0 bottom-0 flex-wrap overflow-hidden px-[15px] transition-all duration-500">
                    <p className="text-[18px] text-[#ffffff] font-medium pt-[170px]  pb-[20px]">
                      Van delivery
                    </p>
                    <Link
                      to="/vandelevery"
                      className="bg-[#f4b757] py-[8px] px-[15px] text-[#ffffff] rounded"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
                <div className="box relative md:w-[364px] w-[300px] h-[270px] transition-all duration-500 my-[20px] mx-[10px]">
                  <img src={v6} className="w-[364px] h-[270px] " alt="" />
                  <div className="box-item w-full h-0 absolute left-0 bottom-0 flex-wrap overflow-hidden px-[15px] transition-all duration-500">
                    <p className="text-[18px] text-[#ffffff] font-medium pt-[170px]  pb-[20px]">
                      Veteran fleet
                    </p>
                    <Link
                      to="/veteran"
                      className="bg-[#f4b757] py-[8px] px-[15px] text-[#ffffff] rounded"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
                <div className="box relative md:w-[364px] w-[300px] h-[270px] transition-all duration-500 my-[20px] mx-[10px]">
                  <img src={v8} className="w-[364px] h-[270px] " alt="" />
                  <div className="box-item w-full h-0 absolute left-0 bottom-0 flex-wrap overflow-hidden px-[15px] transition-all duration-500">
                    <p className="text-[18px] text-[#ffffff] font-medium pt-[170px]  pb-[20px]">
                      Storage with us
                    </p>
                    <Link
                      to="/storagewith"
                      className="bg-[#f4b757] py-[8px] px-[15px] text-[#ffffff] rounded"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
                <div className="box relative md:w-[364px] w-[300px] h-[270px] transition-all duration-500 my-[20px] mx-[10px]">
                  <img src={v9} className="w-[364px] h-[270px] " alt="" />
                  <div className="box-item w-full h-0 absolute left-0 bottom-0 flex-wrap overflow-hidden px-[15px] transition-all duration-500">
                    <p className="text-[18px] text-[#ffffff] font-medium pt-[170px]  pb-[20px]">
                      Bus Transport
                    </p>
                    <Link
                      to="/bustransport"
                      className="bg-[#f4b757] py-[8px] px-[15px] text-[#ffffff] rounded"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
          {openTab === 3 && (
            <div className="flex items-center justify-center">
              <div className="flex items-center flex-wrap sm:w-[92%] w-[100%]">
                <div className="box relative md:w-[364px] w-[300px] h-[270px] transition-all duration-500 my-[20px] mx-[10px]">
                  <img src={v5} className="w-[364px] h-[270px] " alt="" />
                  <div className="box-item w-full h-0 absolute left-0 bottom-0 flex-wrap overflow-hidden px-[15px] transition-all duration-500">
                    <p className="text-[18px] text-[#ffffff] font-medium pt-[170px]  pb-[20px]">
                      Van delivery
                    </p>
                    <Link
                      to="/vandelevery"
                      className="bg-[#f4b757] py-[8px] px-[15px] text-[#ffffff] rounded"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
          {openTab === 4 && (
            <div className="flex items-center justify-center">
              <div className="flex sm:w-[92%] w-[100%] items-center justify-evenly flex-wrap">
                <div className="box relative md:w-[364px] w-[300px] h-[270px] transition-all duration-500 my-[20px] mx-[10px]">
                  <img src={v2} className="w-[364px] h-[270px] " alt="" />
                  <div className="box-item w-full h-0 absolute left-0 bottom-0 flex-wrap overflow-hidden px-[15px] transition-all duration-500">
                    <p className="text-[18px] text-[#ffffff] font-medium pt-[170px]  pb-[20px]">
                      Main load trucks
                    </p>
                    <Link
                      to="/mainloadtruck"
                      className="bg-[#f4b757] py-[8px] px-[15px] text-[#ffffff] rounded"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
                <div className="box relative md:w-[364px] w-[300px] h-[270px] transition-all duration-500 my-[20px] mx-[10px]">
                  <img src={v3} className="w-[364px] h-[270px] " alt="" />
                  <div className="box-item w-full h-0 absolute left-0 bottom-0 flex-wrap overflow-hidden px-[15px] transition-all duration-500">
                    <p className="text-[18px] text-[#ffffff] font-medium pt-[170px]  pb-[20px]">
                      Main trucks
                    </p>
                    <Link
                      to="/maintruck"
                      className="bg-[#f4b757] py-[8px] px-[15px] text-[#ffffff] rounded"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
                <div className="box relative md:w-[364px] w-[300px] h-[270px] transition-all duration-500 my-[20px] mx-[10px]">
                  <img src={v5} className="w-[364px] h-[270px] " alt="" />
                  <div className="box-item w-full h-0 absolute left-0 bottom-0 flex-wrap overflow-hidden px-[15px] transition-all duration-500">
                    <p className="text-[18px] text-[#ffffff] font-medium pt-[170px]  pb-[20px]">
                      Van delivery
                    </p>
                    <Link
                      to="/vandelevery"
                      className="bg-[#f4b757] py-[8px] px-[15px] text-[#ffffff] rounded"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
                <div className="box relative md:w-[364px] w-[300px] h-[270px] transition-all duration-500 my-[20px] mx-[10px]">
                  <img src={v6} className="w-[364px] h-[270px] " alt="" />
                  <div className="box-item w-full h-0 absolute left-0 bottom-0 flex-wrap overflow-hidden px-[15px] transition-all duration-500">
                    <p className="text-[18px] text-[#ffffff] font-medium pt-[170px]  pb-[20px]">
                      Veteran fleet
                    </p>
                    <Link
                      to="/veteran"
                      className="bg-[#f4b757] py-[8px] px-[15px] text-[#ffffff] rounded"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
                <div className="box relative md:w-[364px] w-[300px] h-[270px] transition-all duration-500 my-[20px] mx-[10px]">
                  <img src={v8} className="w-[364px] h-[270px] " alt="" />
                  <div className="box-item w-full h-0 absolute left-0 bottom-0 flex-wrap overflow-hidden px-[15px] transition-all duration-500">
                    <p className="text-[18px] text-[#ffffff] font-medium pt-[170px]  pb-[20px]">
                      Storage with us
                    </p>
                    <Link
                      to="/storagewith"
                      className="bg-[#f4b757] py-[8px] px-[15px] text-[#ffffff] rounded"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
                <div className="box relative md:w-[364px] w-[300px] h-[270px] transition-all duration-500 my-[20px] mx-[10px]">
                  <img src={v9} className="w-[364px] h-[270px] " alt="" />
                  <div className="box-item w-full h-0 absolute left-0 bottom-0 flex-wrap overflow-hidden px-[15px] transition-all duration-500">
                    <p className="text-[18px] text-[#ffffff] font-medium pt-[170px]  pb-[20px]">
                      Bus Transport
                    </p>
                    <Link
                      to="/bustransport"
                      className="bg-[#f4b757] py-[8px] px-[15px] text-[#ffffff] rounded"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Vehicleitem;
