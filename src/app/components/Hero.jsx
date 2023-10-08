import React from "react";
import Link from "next/link";
import { BsDot } from "react-icons/bs";

function Hero() {
  return (
    <section>
      <div className="w-full bg_img py-20">
        <div className="container mx-auto px-4">
          <div className="text-white text-center">
            <h3 className="italic font-thin text-[3rem] md:text-[4rem] lg:text-[7rem] blur-[1px]">
              Black or Blonde
            </h3>
            <div className="flex  items-center justify-center -mt-5 lg:-mt-10">
              <BsDot className=" text-[6rem] md:text-[8rem] lg:text-[10rem] mr-2" />
              <p className="uppercase text-[3.1rem] md:text-[4.5rem] lg:text-[7rem] fotn-extrabold tracking-[15px] -mx-8">
                Black
              </p>
              <BsDot className="text-[6rem] md:text-[8rem] lg:text-[10rem]" />
            </div>
            <p className="uppercase mt-3 lg:mt-2 text-xl tracking-[5px] flex items-center justify-center">
              New york{" "}
              <span className="">
                <BsDot className="mr-2" />{" "}
              </span>{" "}
              since 2004
            </p>
          </div>
        </div>
      </div>
      {/* ======================================= */}
      <div className="bg-[#282828] w-full py-20">
        <div className="container mx-auto">
          <div className="text-white text-center">
            <p className="italic text-6xl md:text-8xl lg:text-9xl text-[#C59D5F] brightness-50">
              Hair Lovers
            </p>
            <div className="-mt-9 md:-mt-12 lg:-mt-16 z-10 ">
              <p className="uppercase tracking-[5px] flex items-center md:text-xl lg:text-2xl justify-center brightness-100">
                New york{" "}
                <span className="">
                  <BsDot className="mr-2" />{" "}
                </span>{" "}
                since 2004
              </p>
              <div className="z-10 pt-5">
                <h2 className="font-semibold  text-4xl lg:text-5xl py-5 lg:py-10 tracking-[2px]">
                  OUR STORY
                </h2>
                <p className="text-[1.1rem] pb-6 lg:px-60 lg:3xl">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                  ut ad minim
                </p>
                <div className=" py-10 ">
                  <Link
                    href={"#"}
                    className="uppercase py-4 px-16 border-[1px] tracking-[3px] font-semibold hover:text-black hover:bg-white transition-all duration-200 "
                  >
                    read more
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 
        ======================================= */}
    </section>
  );
}

export default Hero;
