import React from "react";
import Link from "next/link";
import { BsFillTelephoneForwardFill, BsArrowRight } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import { LuMail } from "react-icons/lu";

function Contactpage() {
  return (
    <section>
      <div className="contact_bg_img w-full py-40 h-[80vh]  ">
        <div className="container mx-auto px-4">
          <div className="mt-20 flex items-center justify-between lg:justify-evenly">
            <h1 className="text-[#D6A354] font-semibold text-6xl lg:text-8xl tracking-[1px] ">
              Contact
            </h1>
            <div className="flex items-center gap-4">
              <Link
                href={"#"}
                className="text-white text-2xl font-semibold hover:text-[#D6A354] transition-all duration-300"
              >
                Qutteer
              </Link>
              <p className="text-[#D6A354] text-xl">contact</p>
            </div>
          </div>
        </div>
      </div>
      {/* ============================= */}
      <section className=" bg-white w-full py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4">
            <h2 className="uppercase text-[#252525] font-bold text-4xl ">
              get in touch
            </h2>
            <p className="text-[#7A7A7A]">
              Sit amet consectetur adipiscing elit sed do eiusmod tempor
              incididunt labore dolore magna aliqua suspendisse
            </p>
          </div>
          <div className="py-4 lg:py-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
            <div className="bg-[#EFEFEF] text-[#252525] hover:text-white hover:bg-[#D6A354] w-full p-4 transition-all duration-300">
              <Link href={"#"}>
                <div className="flex gap-6">
                  <div className="flex items-center justify-center">
                    <div className="bg-[#D6A354] p-4">
                      <BsFillTelephoneForwardFill className="text-4xl text-white" />
                    </div>
                  </div>
                  <div className="">
                    <h3 className="text-2xl font-semibold pb-1">Phone:</h3>
                    <p className="text-md">+555 56454 5454</p>
                    <p className="text-md ">+555 56454 5454</p>
                  </div>
                </div>
              </Link>
            </div>

            <div className="bg-[#EFEFEF] text-[#252525] hover:text-white hover:bg-[#D6A354] w-full p-4 transition-all duration-300">
              <Link href={"#"}>
                <div className="flex gap-6">
                  <div className="flex items-center justify-center">
                    <div className="bg-[#D6A354] p-4">
                      <MdLocationOn className="text-4xl text-white" />
                    </div>
                  </div>
                  <div className="">
                    <h3 className="text-2xl font-semibold pb-1">Address:</h3>
                    <p className="text-md ">
                      Haltenstrase, Lugaggia. Switzerland
                    </p>
                  </div>
                </div>
              </Link>
            </div>

            <div className="bg-[#EFEFEF] text-[#252525] hover:text-white hover:bg-[#D6A354] w-full p-4 transition-all duration-300">
              <Link href={"#"}>
                <div className="flex gap-6">
                  <div className="flex items-center justify-center">
                    <div className="bg-[#D6A354] p-4">
                      <LuMail className="text-4xl text-white" />
                    </div>
                  </div>
                  <div className="">
                    <h3 className="text-2xl font-semibold pb-1">Email:</h3>
                    <p className="text-md">no@themedraft.com</p>
                    <p className="text-md ">replay@themedraft.com</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          {/* calender and input section start */}
          <div className="py-10 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-5">
            <div className="text-center text-5xl">Calender is here</div>
            <div className="bg-[#D6A354] w-full p-5">
              <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                <input
                  type="text"
                  placeholder="Name*"
                  className="py-5 rounded-[5px] w-full text-[#252525] placeholder-[#252525] px-4 font-semibold focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="Email*"
                  className="py-5 rounded-[5px] w-full text-[#252525] placeholder-[#252525] px-5 font-semibold focus:outline-none"
                />
                <input
                  type="number"
                  placeholder="Phone*"
                  className="py-5 rounded-[5px] w-full text-[#252525] placeholder-[#252525] px-5 font-semibold focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Hair Cut"
                  className="py-5 rounded-[5px] w-full text-[#252525] placeholder-[#252525] px-5 font-semibold focus:outline-none"
                />
                <input
                  type="date"
                  className="lg:col-span-2 py-5 rounded-[5px] w-full text-[#252525] placeholder-[#252525] px-5 font-semibold focus:outline-none"
                />
                <textarea
                  name="text"
                  placeholder="Message"
                  cols="30"
                  rows="5"
                  className="lg:col-span-2 py-5 rounded-[5px] w-full text-[#252525] placeholder-[#252525] px-5 font-semibold focus:outline-none"
                ></textarea>
              </div>
              <div className="flex justify-center py-5">
                <button
                  type="button"
                  className="flex items-center justify-center text-white gap-2 border-2 border-white rounded-[10px] py-4 w-full hover:bg-[#252525] transition-all duration-200"
                >
                  <p className="text-lg">submit now</p>
                  <BsArrowRight className="text-lg" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ================================ */}
    </section>
  );
}

export default Contactpage;
