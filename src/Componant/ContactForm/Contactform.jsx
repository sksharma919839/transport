import React from "react";

function Contactform() {
  return (
    <>
      <div>
        <div className="pt-[55px] lg:px-[50px] px-[20px] pb-[70px]">
          <h4 className="text-[32px] text-[#000000] mb-[30px]">Contact us</h4>
          <form>
            <input
              type="text"
              name="name"
              id=""
              placeholder="Name*"
              className="py-[7px] px-[19px] mb-[25px] border rounded sm:w-[405px]  w-[280px]"
            />
            <input
              type="text"
              name="subject"
              id=""
              placeholder="Subject*"
              className="py-[7px] px-[19px] mb-[25px] border rounded sm:w-[405px] w-[280px]"
            />
            <input
              type="email"
              name="email"
              id=""
              placeholder="Email*"
              className="py-[7px] px-[19px] mb-[25px] border rounded sm:w-[405px] w-[280px]"
            />
            <textarea
              name="message"
              id=""
              placeholder="Message*"
              className="py-[10px] px-[20px] mb-[25px] border rounded sm:w-[405px] w-[280px] h-[157px]"
            ></textarea>
            <br />
            <button className="bg-[#f3b757] py-[11px] px-[17px] text-[#ffffff] transition-all duration-700 hover:bg-[#ef9e1c]">
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contactform;
