import React from "react";
import Link from "next/link";
import { BsDot } from "react-icons/bs";

function Worktime() {
  return (
    <section>
      <div className="bg-black w-full py-28">
        <div className="container mx-auto px-4 lg:px-20">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
            {/* worksection time Hours content start  */}
            <div className="text-white">
              <p className="uppercase text-sm tracking-[5px] flex items-center ">
                New york{" "}
                <span className="">
                  <BsDot className="mr-2" />{" "}
                </span>{" "}
                since 2004
              </p>
              <h2 className="py-5 text-white text-5xl font-bold tracking-[3px]">
                WORKING HOURS
              </h2>
              <div className="py-2">
                <div className="text-white flex justify-between items-center border-b-[1px] border-[#333333] py-3  ">
                  <h3 className="uppercase text-xl font-semibold">
                    working days
                  </h3>
                  <p
                    className=" text-sm
                    "
                  >
                    9AM - 9PM
                  </p>
                </div>
              </div>
              <div className="py-2">
                <div className="text-white flex justify-between items-center border-b-[1px] border-[#333333] py-3  ">
                  <h3 className="uppercase text-xl font-semibold">SATURDAY</h3>
                  <p
                    className=" text-sm
                    "
                  >
                    10AM - 8PM
                  </p>
                </div>
              </div>
              <div className="py-2">
                <div className="text-white flex justify-between items-center border-b-[1px] border-[#333333] py-3  ">
                  <h3 className="uppercase text-xl font-semibold">Sunday</h3>
                  <p
                    className=" text-sm
                    "
                  >
                    Closed
                  </p>
                </div>
              </div>
              <div className="pt-5 flex gap-4">
                <p className="text-3xl">*</p>
                <p className="text-">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna.
                </p>
              </div>
            </div>
            {/* worksection celender section start  */}
            <div className="text-center text-white">
              <p className="text-5xl font-bold">Calender is here</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Worktime;
