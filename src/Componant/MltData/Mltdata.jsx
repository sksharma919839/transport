import React from "react";
import { IoCheckbox } from "react-icons/io5";

function Mltdata() {
  return (
    <>
      <div className="flex items-center justify-center">
        <div className="md:w-[92%] w-full md:flex justify-between">
          <div className="md:w-[46%]">
            <div className="py-[40px] px-[20px]">
              <h4 className="text-[24px] text-[#000000] mb-[40px]">
                Leading logistic service
              </h4>
              <h6 className="text-[18px] text-[#000000] mb-[40px]">
                Sit amet adipisicing eiusmod tempor ut labore et dolore magna
                aliqua ad minim veniam, quis nostrud exercitation.
              </h6>
              <p className="text-[15px] text-[#727272] mb-[30px]">
                Lorem ipsum dolor sit amet adipisicing et dolore magna aliqua ad
                minim veniam, quis nostrud exercitation ipsum dolor sit amet
                adipisicing eiusmod tempor elementum ut labore et dolore.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </p>
              <p className="text-[15px] text-[#727272]">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </p>
            </div>
          </div>
          <div className="md:w-[46%] w-full">
            <div className="py-[40px] px-[20px]">
              <h4 className="text-[24px] text-[#000000] mb-[40px]">
                Mobile Shipment Tracking
              </h4>
              <p className="mb-[40px] text-[#727272] text-[15px]">
                Lorem ipsum dolor sit amet adipisicing et dolore magna aliqua ad
                minim veniam, quis nostrud exercitation ipsum dolor sit amet
                adipisicing eiusmod tempor elementum ut labore et dolore.
              </p>
              <ul>
                <li className="flex items-center my-[10px]">
                  <IoCheckbox />
                  <span className="text-[16px] text-[#727272] pl-[5px]">
                    Duis aute irure dolor in reprehenderit in voluptate.
                  </span>
                </li>
                <li className="flex items-center my-[10px]">
                  <IoCheckbox />
                  <span className="text-[16px] text-[#727272] pl-[5px]">
                    Excepteur sint occaecat cupidatat non proident, sunt.
                  </span>
                </li>
                <li className="flex items-center my-[10px]">
                  <IoCheckbox />
                  <span className="text-[16px] text-[#727272] pl-[5px]">
                    Sed ut perspiciatis unde omnis iste natus.
                  </span>
                </li>
                <li className="flex items-center my-[10px]">
                  <IoCheckbox />
                  <span className="text-[16px] text-[#727272] pl-[5px]">
                    Nemo enim ipsam voluptatem quia.
                  </span>
                </li>
                <li className="flex items-center my-[10px]">
                  <IoCheckbox />
                  <span className="text-[16px] text-[#727272] pl-[5px]">
                    Consequuntur magni dolores eos qui ratione.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Mltdata;
