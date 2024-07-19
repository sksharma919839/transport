import React from "react";
import { Link } from "react-router-dom";

function Experince() {
  return (
    <div>
      <div className="experince-bg md:h-[550px] h-auto">
        <div className="pt-[100px] pb-[200px]">
          <p className="text-[20px] text-center text-[#ffffffbf]">
            Professional Services
          </p>
          <p className="text-[38px] text-center pb-[80px]  text-[#ffffff] ">
            With 10 years of experience, helping businesses <br /> to find
            comprehensive solutions
          </p>
          <div className="flex items-center justify-center">
            <Link
              className="bg-[#f3b757] text-[#ffffff] border-2 border-[#f3b757] rounded px-[20px] py-[12px] text-center"
              to="/contact"
            >
              CONTACT US
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experince;
