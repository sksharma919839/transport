import React from "react";
import { Link } from "react-router-dom";

function Order() {
  return (
    <div className="flex items-center  justify-center">
      <div className="mb-[150px] w-[86%]">
        <h3 className="text-[#000000] text-[36px] text-center">
          We’re dedicated to customers and focused on quality
        </h3>
        <p className="text-[16px] text-[#727272] text-center mb-[60px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing sed tortor rutrum,
          aliquam <br /> mauris ac, sollicitudin elit tincidunt non auctor
          vitae.
        </p>
        <div className="flex items-center justify-center">
          <Link
            to="/contact"
            className="bg-[#f3b757] text-[#ffffff] text-[17px] border-2 border-[#f3b757] py-[15px] px-[41px] rounded"
          >
            REQUEST FREE QUOTE
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Order;
