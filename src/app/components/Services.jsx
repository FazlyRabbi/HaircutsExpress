import React from "react";
import Link from "next/link";
import Image from "next/image";
import hair_img from "../img/hair_img.png";
import logo from "../img/black-logo.png";
import services_img_1 from "../img/services_img_1.jpg";
import services_img_2 from "../img/services_img_2.jpg";
import services_img_3 from "../img/services_img_3.jpg";
import services_img_4 from "../img/services_img_4.jpg";
import services_img_5 from "../img/services_img_5.jpg";
import services_img_6 from "../img/services_img_6.jpg";
import services_img_7 from "../img/services_img_7.jpg";
import services_img_8 from "../img/services_img_8.jpg";
import services_img_9 from "../img/services_img_9.jpg";
import services_img_10 from "../img/services_img_10.jpg";
import services_img_11 from "../img/services_img_11.jpg";
import services_img_12 from "../img/services_img_12.jpg";
import services_img_13 from "../img/services_img_13.jpg";
import services_small_img_1 from "../img/services_small_img_1.jpg";
import services_small_img_2 from "../img/services_small_img_2.jpg";
import services_small_img_3 from "../img/services_small_img_3.jpg";
import services_small_img_4 from "../img/services_small_img_4.jpg";
import services_small_img_5 from "../img/services_small_img_5.jpg";
import services_small_img_6 from "../img/services_small_img_6.jpg";
import services_small_img_7 from "../img/services_small_img_7.jpg";
import services_small_img_8 from "../img/services_small_img_8.jpg";
import services_small_img_9 from "../img/services_small_img_9.jpg";
import services_small_img_10 from "../img/services_small_img_10.jpg";
import services_small_img_11 from "../img/services_small_img_11.jpg";
import services_small_img_12 from "../img/services_small_img_12.jpg";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import Footer from "./Footer";

function Services() {
  return (
    <section>
      <div className="about_bg_img w-full py-40 ">
        <div className="container mx-auto px-4">
          <div className="text-white text-center">
            <p className="uppercase font-semibold  font-co  text-lg lg:text-xl">
              our service
            </p>
            <h2 className="text-4xl md:text-6xl  font-co font-bold py-2  lg:py-4 tracking-[1px]">
              Service
            </h2>
          </div>
        </div>
      </div>
      {/* ============== Service section content start =============== */}

      <div className="bg-[#F5EEE7] w-full">
        <div className="mx-auto">
          <div className=" md:px-0 lg:px-0">
            {/* content 1 start here */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-0">
              <div className="flex justify-center">
                <Image
                  src={services_img_1}
                  alt="service_img"
                  height={900}
                  width={900}
                  className=""
                />
              </div>
              <div className="lg:py-10 flex flex-col justify-center items-center">
                <h3 className="uppercase font-semibold text-3xl font-co md:text-4xl">
                  haircuts
                </h3>
                <div>
                  <Image src={hair_img} alt="hair_img" />
                </div>
                <p className="text-[#8a8787] text-sm md:text-lg text-center py-3 lg:px-10 ">
                  Looking for a great haircut in Queens NY, but not sure exactly
                  what you want? We will listen to your ideas and come up with a
                  solution for your hair that you will feel proud off!
                  Confidence is what keeps our clients coming back. ..
                </p>
                <div className="py-10">
                  <Link
                    href={"/choose"}
                    className="uppercase tracking-[2px] border-[1px]  py-4 px-8 border-[#E2AE10] hover:bg-[#E2AE10] hover:text-white transition-all duration-200"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
            {/* content 2 start here */}
            <div className="grid grid-cols-1 lg:grid-cols-2 pt-10 lg:pt-0 gap-10 lg:gap-0">
              <div className="flex justify-center">
                <Image
                  src={services_img_2}
                  alt="service_img"
                  height={900}
                  width={900}
                  className=""
                />
              </div>
              <div className="lg:py-10 order-first flex flex-col justify-center items-center">
                <h3 className="uppercase font-semibold text-3xl font-co md:text-4xl text-center">
                  WOMEN’S HAIRCUT AND BLOWDRY
                </h3>
                <div>
                  <Image src={hair_img} alt="hair_img" />
                </div>
                <p className="text-[#8a8787] text-sm md:text-lg text-center py-3 lg:px-10 ">
                  Looking for a great haircut in Queens NY, but not sure exactly
                  what you want? We will listen to your ideas and come up with a
                  solution for your hair that you will feel proud off!
                  Confidence is what keeps our clients coming back. ..
                </p>
                <div className="py-10">
                  <Link
                    href={"/choose"}
                    className="uppercase tracking-[2px] border-[1px]  py-4 px-8 border-[#E2AE10] hover:bg-[#E2AE10] hover:text-white transition-all duration-200"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
            {/* content 3 start here */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-0">
              <div className="flex justify-center">
                <Image
                  src={services_img_3}
                  alt="service_img"
                  height={900}
                  width={900}
                  className=""
                />
              </div>
              <div className="lg:py-10 flex flex-col justify-center items-center">
                <h3 className="uppercase font-semibold text-3xl font-co md:text-4xl  text-center">
                  WOMEN’S BLOW-DRY
                </h3>
                <div>
                  <Image src={hair_img} alt="hair_img" />
                </div>
                <p className="text-[#8a8787] text-sm md:text-lg text-center py-3 lg:px-10 ">
                  Looking for a great haircut in Queens NY, but not sure exactly
                  what you want? We will listen to your ideas and come up with a
                  solution for your hair that you will feel proud off!
                  Confidence is what keeps our clients coming back. ..
                </p>
                <div className="py-10">
                  <Link
                    href={"/choose"}
                    className="uppercase tracking-[2px] border-[1px] border-[#E2AE10] hover:bg-[#E2AE10] py-4 px-8  hover:text-white transition-all duration-200"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
            {/* content 4 start here */}
            <div className="grid grid-cols-1 lg:grid-cols-2 pt-10 lg:pt-0 gap-10 lg:gap-0">
              <div className="flex justify-center">
                <Image
                  src={services_img_4}
                  alt="service_img"
                  height={900}
                  width={900}
                  className=""
                />
              </div>
              <div className="lg:py-10 order-first flex flex-col justify-center items-center">
                <h3 className="uppercase font-semibold text-3xl font-co md:text-4xl  text-center">
                  MEN’S HAIRCUT AND STYLE
                </h3>
                <div>
                  <Image src={hair_img} alt="hair_img" />
                </div>
                <p className="text-[#8a8787] text-sm md:text-lg text-center py-3 lg:px-10 ">
                  Looking for a great haircut in Queens NY, but not sure exactly
                  what you want? We will listen to your ideas and come up with a
                  solution for your hair that you will feel proud off!
                  Confidence is what keeps our clients coming back. ..
                </p>
                <div className="py-10">
                  <Link
                    href={"/choose"}
                    className="uppercase tracking-[2px] border-[1px] border-[#E2AE10] hover:bg-[#E2AE10] py-4 px-8  hover:text-white transition-all duration-200"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
            {/* content 5 start here */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-0">
              <div className="flex justify-center">
                <Image
                  src={services_img_5}
                  alt="service_img"
                  height={900}
                  width={900}
                  className=""
                />
              </div>
              <div className=" lg:py-10 flex flex-col justify-center items-center">
                <h3 className="uppercase font-semibold text-3xl font-co md:text-4xl  text-center">
                  CHILD’S HAIRCUT – GIRL & BOY (10 AND UNDER)
                </h3>
                <div>
                  <Image src={hair_img} alt="hair_img" />
                </div>
                <p className="text-[#8a8787] text-sm md:text-lg text-center py-3 lg:px-10 ">
                  Looking for a great haircut in Queens NY, but not sure exactly
                  what you want? We will listen to your ideas and come up with a
                  solution for your hair that you will feel proud off!
                  Confidence is what keeps our clients coming back. ..
                </p>
                <div className="py-10">
                  <Link
                    href={"/choose"}
                    className="uppercase tracking-[2px] border-[1px] border-[#E2AE10] hover:bg-[#E2AE10] py-4 px-8  hover:text-white transition-all duration-200"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
            {/* content 6 start here */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-0 pt-10 lg:pt-0">
              <div className="flex justify-center">
                <Image
                  src={services_img_6}
                  alt="service_img"
                  height={900}
                  width={900}
                  className=""
                />
              </div>
              <div className="lg:py-10 order-first flex flex-col justify-center items-center">
                <h3 className="uppercase font-semibold text-3xl font-co md:text-4xl  text-center">
                  HAIR COLOR
                </h3>
                <div>
                  <Image src={hair_img} alt="hair_img" />
                </div>
                <p className="text-[#8a8787] text-sm md:text-lg text-center py-3 lg:px-10">
                  Looking for a great haircut in Queens NY, but not sure exactly
                  what you want? We will listen to your ideas and come up with a
                  solution for your hair that you will feel proud off!
                  Confidence is what keeps our clients coming back. ..
                </p>
                <div className="py-10">
                  <Link
                    href={"/choose"}
                    className="uppercase tracking-[2px] border-[1px] border-[#E2AE10] hover:bg-[#E2AE10] py-4 px-8  hover:text-white transition-all duration-200"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
            {/* content 7 start here */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-0">
              <div className="flex justify-center">
                <Image
                  src={services_img_7}
                  alt="service_img"
                  height={900}
                  width={900}
                  className=""
                />
              </div>
              <div className="lg:py-10 flex flex-col justify-center items-center">
                <h3 className="uppercase font-semibold text-3xl font-co md:text-4xl  text-center">
                  KERATIN REJUVENATION
                </h3>
                <div>
                  <Image src={hair_img} alt="hair_img" />
                </div>
                <p className="text-[#8a8787] text-sm md:text-lg text-center py-3 lg:px-10">
                  Looking for a great haircut in Queens NY, but not sure exactly
                  what you want? We will listen to your ideas and come up with a
                  solution for your hair that you will feel proud off!
                  Confidence is what keeps our clients coming back. ..
                </p>
                <div className="py-10">
                  <Link
                    href={"/choose"}
                    className="uppercase tracking-[2px] border-[1px] border-[#E2AE10] hover:bg-[#E2AE10] py-4 px-8  hover:text-white transition-all duration-200"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
            {/* content 8 start here */}
            <div className=" grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-0 pt-10 lg:pt-0">
              <div className="flex justify-center">
                <Image
                  src={services_img_8}
                  alt="service_img"
                  height={900}
                  width={900}
                  className=""
                />
              </div>
              <div className="lg:py-10 order-first flex flex-col justify-center items-center">
                <h3 className="uppercase font-semibold text-3xl font-co md:text-4xl  text-center">
                  MAKEUP
                </h3>
                <div>
                  <Image src={hair_img} alt="hair_img" />
                </div>
                <p className="text-[#8a8787] text-sm md:text-lg text-center py-3 lg:px-10">
                  Looking for a great haircut in Queens NY, but not sure exactly
                  what you want? We will listen to your ideas and come up with a
                  solution for your hair that you will feel proud off!
                  Confidence is what keeps our clients coming back. ..
                </p>
                <div className="py-10">
                  <Link
                    href={"/choose"}
                    className="uppercase tracking-[2px] border-[1px] border-[#E2AE10] hover:bg-[#E2AE10] py-4 px-8  hover:text-white transition-all duration-200"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
            {/* content 9 start here */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-0">
              <div className="flex justify-center">
                <Image
                  src={services_img_9}
                  alt="service_img"
                  height={900}
                  width={900}
                  className=""
                />
              </div>
              <div className="lg:py-10 flex flex-col justify-center items-center">
                <h3 className="uppercase font-semibold text-3xl font-co md:text-4xl  text-center">
                  BEST BALAYAGE IN QUEENS NY
                </h3>
                <div>
                  <Image src={hair_img} alt="hair_img" />
                </div>
                <p className="text-[#8a8787] text-sm md:text-lg text-center py-3 lg:px-10 ">
                  Looking for a great haircut in Queens NY, but not sure exactly
                  what you want? We will listen to your ideas and come up with a
                  solution for your hair that you will feel proud off!
                  Confidence is what keeps our clients coming back. ..
                </p>
                <div className="py-10">
                  <Link
                    href={"/choose"}
                    className="uppercase tracking-[2px] border-[1px] border-[#E2AE10] hover:bg-[#E2AE10] py-4 px-8  hover:text-white transition-all duration-200"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
            {/* content 10 start here */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-0 pt-10 lg:pt-0">
              <div className="flex justify-center">
                <Image
                  src={services_img_10}
                  alt="service_img"
                  height={900}
                  width={900}
                  className=""
                />
              </div>
              <div className="lg:py-10 order-first flex flex-col justify-center items-center">
                <h3 className="uppercase font-semibold text-3xl font-co md:text-4xl  text-center">
                  BEST HIGHLIGHTS IN QUEENS NY
                </h3>
                <div>
                  <Image src={hair_img} alt="hair_img" />
                </div>
                <p className="text-[#8a8787] text-sm md:text-lg text-center py-3 lg:px-10">
                  Looking for a great haircut in Queens NY, but not sure exactly
                  what you want? We will listen to your ideas and come up with a
                  solution for your hair that you will feel proud off!
                  Confidence is what keeps our clients coming back. ..
                </p>
                <div className="py-10">
                  <Link
                    href={"/choose"}
                    className="uppercase tracking-[2px] border-[1px] border-[#E2AE10] hover:bg-[#E2AE10] py-4 px-8 hover:text-white transition-all duration-200"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
            {/* content 11 start here */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-0">
              <div className="flex justify-center">
                <Image
                  src={services_img_11}
                  alt="service_img"
                  height={900}
                  width={900}
                  className=""
                />
              </div>
              <div className="lg:py-10 flex flex-col justify-center items-center">
                <h3 className="uppercase font-semibold text-3xl font-co md:text-4xl  text-center">
                  BEST OMBRE IN QUEENS, NY
                </h3>
                <div>
                  <Image src={hair_img} alt="hair_img" />
                </div>
                <p className="text-[#8a8787] text-sm md:text-lg text-center py-3 lg:px-10 ">
                  Looking for a great haircut in Queens NY, but not sure exactly
                  what you want? We will listen to your ideas and come up with a
                  solution for your hair that you will feel proud off!
                  Confidence is what keeps our clients coming back. ..
                </p>
                <div className="py-10">
                  <Link
                    href={"/choose"}
                    className="uppercase tracking-[2px] border-[1px] border-[#E2AE10] hover:bg-[#E2AE10] py-4 px-8 hover:text-white transition-all duration-200"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
            {/* content 12 start here */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-0 pt-10 lg:pt-0">
              <div className="flex justify-center">
                <Image
                  src={services_img_12}
                  alt="service_img"
                  height={900}
                  width={900}
                  className=""
                />
              </div>
              <div className="lg:py-10 order-first flex flex-col justify-center items-center">
                <h3 className="uppercase font-semibold text-3xl font-co md:text-4xl  text-center">
                  BEST OMBRE IN QUEENS, NY
                </h3>
                <div>
                  <Image src={hair_img} alt="hair_img" />
                </div>
                <p className="text-[#8a8787] text-sm md:text-lg text-center py-3 lg:px-10 ">
                  Looking for a great haircut in Queens NY, but not sure exactly
                  what you want? We will listen to your ideas and come up with a
                  solution for your hair that you will feel proud off!
                  Confidence is what keeps our clients coming back. ..
                </p>
                <div className="py-10">
                  <Link
                    href={"/choose"}
                    className="uppercase tracking-[2px] border-[1px] border-[#E2AE10] hover:bg-[#E2AE10] py-4 px-8 hover:text-white transition-all duration-200"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
            {/* content 13 start here */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-0">
              <div className="flex justify-center">
                <Image
                  src={services_img_13}
                  alt="service_img"
                  height={900}
                  width={900}
                  className=""
                />
              </div>
              <div className="lg:py-10 flex flex-col justify-center items-center">
                <h3 className="uppercase font-semibold text-3xl font-co md:text-4xl  text-center">
                  BRAZILIAN BLOWOUT QUEENS NY
                </h3>
                <div>
                  <Image src={hair_img} alt="hair_img" />
                </div>
                <p className="text-[#8a8787] text-sm md:text-lg text-center py-3 lg:px-10">
                  Looking for a great haircut in Queens NY, but not sure exactly
                  what you want? We will listen to your ideas and come up with a
                  solution for your hair that you will feel proud off!
                  Confidence is what keeps our clients coming back. ..
                </p>
                <div className="py-10">
                  <Link
                    href={"/choose"}
                    className="uppercase tracking-[2px] border-[1px] border-[#E2AE10] hover:bg-[#E2AE10] py-4 px-8  hover:text-white transition-all duration-200"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="py-10 grid grid-cols-1 md:grid-cols-6">
            <Image
              src={services_small_img_1}
              alt="services_small_image"
              className=""
            />
            <Image
              src={services_small_img_2}
              alt="services_small_image"
              className=""
            />
            <Image
              src={services_small_img_3}
              alt="services_small_image"
              className=""
            />
            <Image
              src={services_small_img_4}
              alt="services_small_image"
              className=""
            />
            <Image
              src={services_small_img_5}
              alt="services_small_image"
              className=""
            />
            <Image
              src={services_small_img_6}
              alt="services_small_image"
              className=""
            />
            <Image
              src={services_small_img_7}
              alt="services_small_image"
              className=""
            />
            <Image
              src={services_small_img_8}
              alt="services_small_image"
              className=""
            />
            <Image
              src={services_small_img_9}
              alt="services_small_image"
              className=""
            />
            <Image
              src={services_small_img_10}
              alt="services_small_image"
              className=""
            />
            <Image
              src={services_small_img_11}
              alt="services_small_image"
              className=""
            />
            <Image
              src={services_small_img_12}
              alt="services_small_image"
              className=""
            />
          </div>
        </div>
      </div>
      {/* =============== Footer section start =========================== */}
      <Footer />
    </section>
  );
}

export default Services;
