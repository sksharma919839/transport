import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import Contactform from "../ContactForm/Contactform";

function Contactdeatails() {
  return (
    <>
      <div className="mb-[100px] flex items-center justify-center">
        <div className="md:w-[92%] w-full md:flex items-center justify-evenly">
          <div className="lg:w-[600px] md:w-[400px] w-full py-[85px] px-[30px]">
            <div>
              <p className="text-[#f6b457] text-[15px] mb-[20px]">
                Get in touch
              </p>
              <h5 className="text-[22px] text-[#000000] mb-[30px]">
                <b>
                  Feel free to talk to our representative at any time you please
                  use our contact form on our website or one of our contact
                  numbers.
                </b>
              </h5>
              <p className="text-[15px] text-[#727272] mb-[60px]">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. At
                iure possimus <br /> tempore sed tempora commodi architecto odio
                atque aliquam a, <br /> consequuntur provident dignissimos
                voluptatibus ullam, repellat laudantium <br /> error suscipit
                iste, hic necessitatibus quos voluptatum aperiam animi <br />{" "}
                inventore. Doloribus, quasi sequi. Quo!
              </p>
              <h2 className="flex items-center mb-[25px]">
                <FaMapMarkerAlt
                  size={25}
                  className="text-[#F4B757] mr-[30px]"
                />
                <span className="text-[17px] text-[#000000]">
                  The vehicle fleet consists of over 70
                </span>
              </h2>
              <h2 className="flex items-center mb-[25px]">
                <IoCall size={25} className="text-[#F4B757] mr-[30px]" />
                <span className="text-[17px] text-[#000000]">
                  +386 40 222 455
                </span>
              </h2>
              <h2 className="flex items-center mb-[25px]">
                <CiMail size={25} className="text-[#F4B757] mr-[30px]" />
                <span className="text-[17px] text-[#000000]">
                  mail@companyname.com
                </span>
              </h2>
            </div>
          </div>
          <div className="lg:w-[600px] md:w-[400px] w-full">
            <Contactform />
          </div>
        </div>
      </div>
    </>
  );
}

export default Contactdeatails;
