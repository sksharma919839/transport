import React from "react";
import { Link } from "react-router-dom";

function Deatail() {
  return (
    <div>
      <div className="deatail-bg sm:h-[610px] h-auto">
        <div className="sm:pl-[90px] pl-[40px] pb-[40px] pt-[100px]">
          <p className="text-[30px] text-[#262626]">Professional Services</p>
          <p>
            <b className="text-[36px] text-[#262626]">
              With international experience.
            </b>
          </p>
          <p className="text-[16px] mt-[30px] text-[#727272]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            efficitur <br /> malesuada commodo. Vivamus est ex, lacinia quis
            velit id, scelerisque <br /> pulvinar lacus. Praesent nunc erat,
            convallis pellentesque mauris id, <br /> dapibus commodo magna.
          </p>
          <p className="text-[16px] text-[#727272] mb-[40px] mt-[15px]">
            Ut tellus odio, ultricies quis tempor ac, fringilla eget libero
            faucibus orci <br />
            sit amet dolor sagittis pretium porta quam orci, eu cursus elit
            auctor.
          </p>
          <Link
            to="/contact"
            className="border-2  border-[#f3b757] rounded text-[16px] bg-[#f3b757] text-[#ffffff] py-[12px] px-[25px]"
          >
            CONTACT US
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Deatail;
