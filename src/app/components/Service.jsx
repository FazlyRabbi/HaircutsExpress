import React from "react";
import Link from "next/link";
import Image from "next/image";
import service_img_1 from "../img/service_img_1.png";
import service_img_2 from "../img/service_img_2.png";
import service_img_3 from "../img/service_img_3.png";

function Service() {
  return (
    <section>
      <div className="bg-white w-full py-20">
        <div className="container mx-auto ">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3 lg:justify-center">
            <div className="text-center space-y-5">
              <div className="flex justify-center pb-4">
                <Image src={service_img_1} alt="sevice_img" className="" />
              </div>
              <div>
                <Link
                  href={"#"}
                  className="uppercase text-black text-xl md:text-2xl font-semibold hover:text-[#C59D5F] transition-all duration-200"
                >
                  Highlights
                </Link>
              </div>
              <p className="text-[#585756] px-16 md:px-0 lg:px-10">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit sed
                eiusmod tempor incididunt labore
              </p>
            </div>

            <div className="text-center space-y-5">
              <div className="flex justify-center pb-4 ">
                <Image src={service_img_2} alt="sevice_img" className="" />
              </div>
              <div>
                <Link
                  href={"#"}
                  className="uppercase text-black text-xl md:text-2xl  font-semibold hover:text-[#C59D5F] transition-all duration-200"
                >
                  Hair care
                </Link>
              </div>
              <p className="text-[#585756] px-16 md:px-0 lg:px-10">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit sed
                eiusmod tempor incididunt labore
              </p>
            </div>

            <div className="text-center space-y-5">
              <div className="flex justify-center pb-4">
                <Image src={service_img_3} alt="sevice_img" className="" />
              </div>
              <div>
                <Link
                  href={"#"}
                  className="uppercase text-black text-xl md:text-2xl font-semibold hover:text-[#C59D5F] transition-all duration-200"
                >
                  Haircut
                </Link>
              </div>
              <p className="text-[#585756] px-16 md:px-0 lg:px-10">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit sed
                eiusmod tempor incididunt labore
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Service;
