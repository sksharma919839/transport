import React from "react";
import s1 from "../../Image/service-image-1.jpg";
import s2 from "../../Image/service-image-2.jpg";
import Towservicelink from "../TowserviceLink/Towservicelink";

function Towservicedata() {
  return (
    <>
      <div className="flex items-center justify-center">
        <div className="md:w-[90%] w-full flex justify-between">
          <div className="lg:w-[64%] ">
            <h2 className="text-[48px] text-[#000000] my-[20px]">
              Safe and on time delivery
            </h2>
            <h6 className="text-[18px] text-[#000000] mb-[20px]">
              Sit amet adipisicing eiusmod tempor elementum ut labore et dolore
              magna aliqua minim veniam, quis nostrud exercitation dolor in
              reprehenderit in voluptate velit esse cillum dolore.
            </h6>
            <p className="text-[15px] text-[#727272] mb-[50px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua enim
              minim veniam, quis nostrud exercitation ullamco nisi ut aliquip ex
              ea commodo consequat dolor reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident.
            </p>
            <img src={s1} className="w-full mb-[40px]" alt="" />
            <p className="text-[#727272] text-[15px] mb-[70px]">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit umquam eius modi tempora incidunt ut
              labore et dolore magnam aliquam quaerat voluptatem.
            </p>
            <img src={s2} className="w-full mb-[30px]" alt="" />
            <p className="text-[15px] text-[#727272] mb-[80px]">
              sed quia consequuntur magni dolores eos qui ratione voluptatem
              sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
              dolor sit amet, consectetur, adipisci velit, sed quia non numquam
              eius modi tempora incidunt ut labore et dolore magnam aliquam
              quaerat voluptatem.
            </p>
          </div>
          <div className="lg:w-[30%] lg:block hidden">
            <Towservicelink />
          </div>
        </div>
      </div>
    </>
  );
}

export default Towservicedata;
