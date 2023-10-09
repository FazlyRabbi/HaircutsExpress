"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import about_img_1 from "../../img/about_img_1.jpg";
import about_img_2 from "../../img/about_img_2.jpg";
import barber_img_1 from "../../img/barber_Image_1.jpg";
import barber_img_2 from "../../img/barber_Image_2.jpg";
import barber_img_3 from "../../img/barber_Image_3.jpg";
import signature from "../../img/signature.svg";
import { GiCheckMark } from "react-icons/gi";
import { IoIosCut } from "react-icons/io";
import { PiPlayLight } from "react-icons/pi";

export default function About() {
  return (
    <section>
      <div className="about_bg_img w-full py-40 ">
        <div className="container mx-auto px-4">
          <div className="text-white text-center">
            <p className="uppercase font-semibold text-lg lg:text-xl">
              about us
            </p>
            <h2 className="text-4xl md:text-6xl font-bold py-2  lg:py-4 tracking-[1px]">
              Our History
            </h2>
          </div>
        </div>
      </div>
      {/* ============================================== */}
      <section>
        <div className="bg-[#F5EEE7] w-full pt-20">
          <div className="container mx-auto px-4">
            <div className=" grid grid-cols-1 gap-5 lg:grid-cols-2">
              <div className="">
                <p className="uppercase text-[#91765A] font-semibold tracking-[1px]">
                  since 2006
                </p>
                <h3 className="text-3xl lg:text-4xl font-bold text-black">
                  Perukar Barber Shop
                </h3>
                <p className="text-sm text-[#6B6E69] py-4 leading-[20px]">
                  Come experience a unique and edgy barbershop for all your hair
                  and beard needs. ravida haretra nuam enim mi obortis eset
                  uctus enec accumsan eu justo alisuame amet auctor orci donec
                  vitae vehicula risus.
                </p>
                <p className="text-sm text-[#6B6E69] leading-[20px]">
                  Barber utate ons amet ravida haretra nuam the duru miss uctus
                  the drana accumsan justo aliquam sit amet auctor orci done
                  vitae risus duise nisan sapien silver on the accumsan id
                  mauris apien.
                </p>
                <div className="py-5 space-y-2">
                  <div className="flex items-center gap-2 text-[#6B6E69]">
                    <GiCheckMark className="text-sm" />
                    <p className="text-sm">
                      We're professional and certified barbers
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-[#6B6E69]">
                    <GiCheckMark className="text-sm" />
                    <p className="text-sm">
                      We use quality products to make you look perfect
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-[#6B6E69]">
                    <GiCheckMark className="text-sm" />
                    <p className="text-sm">
                      We care about our customers satisfaction
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-5 py-5">
                <div className="mt-28">
                  <Image src={about_img_2} alt="about_image" />
                </div>

                <div>
                  <Image src={about_img_1} alt="about_image" />
                </div>
              </div>
            </div>
            <div className="py-20">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:gap-6">
                <div className="flex gap-5">
                  <div>
                    <IoIosCut className="text-[#AA947D] text-5xl" />
                  </div>
                  <div>
                    <h4 className="text-black font-bold text-3xl">Cuts</h4>
                    <p className="text-sm text-[#6B6E69] py-2 leading-[23px]">
                      Cuts ut nisl quam nestibulum drana odio elementum sceisue
                      the can golden varius the dis monte.
                    </p>
                  </div>
                </div>
                <div className="flex gap-5">
                  <div>
                    <IoIosCut className="text-[#AA947D] text-5xl" />
                  </div>
                  <div>
                    <h4 className="text-black font-bold text-3xl">Fades</h4>
                    <p className="text-sm text-[#6B6E69] py-2 leading-[23px]">
                      Fades ut nisl quam nestibulum drana odio elementum sceisue
                      the can golden varius the dis monte.
                    </p>
                  </div>
                </div>
                <div className="flex gap-5">
                  <div>
                    <IoIosCut className="text-[#AA947D] text-5xl" />
                  </div>
                  <div>
                    <h4 className="text-black font-bold text-3xl">Shaves</h4>
                    <p className="text-sm text-[#6B6E69] py-2 leading-[23px]">
                      Shaves ut nisl quam nestibulum drana odio elementum
                      sceisue the can golden varius the dis monte.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ======================================= */}
      <section>
        <div className="bg-[#14100C] w-full py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-4 lg:items-center lg:gap-0">
              <div className="flex lg:justify-center">
                <Image
                  src={about_img_2}
                  alt="about-img"
                  className="lg:w-[30rem]"
                />
              </div>
              <div>
                <p className="uppercase text-sm font-bold text-[#907559]">
                  17 year of experience
                </p>
                <h2 className="text-white  text-2xl md:text-4xl font-bold">
                  Making pepole look awesome since 2006
                </h2>
                <p className="text-sm text-[#6B6E69] leading-[20px] py-2 md:py-4">
                  Come experience a unique and edgy barbershop for all your hair
                  and beard needs. Vulputate ons amet ravida haretra nuam the
                  drana miss uctus enec accumsan justo aliquam sit amet auctor
                  orci done vitae risus duise nunc sapien.
                </p>
                <div className="flex items-center gap-5 pt-6">
                  <div>
                    <Image src={signature} alt="sign" />
                  </div>
                  <div>
                    <h4 className="text-[#A59F99] font-semibold">
                      Barber, Founder
                    </h4>
                    <p className="text-sm text-[#907559] py-2">Harold Brown</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* =============Berbar section start============== */}
      <section>
        <div className="bg-[#F5EEE7] w-full py-20">
          <div className="container mx-auto px-4 ">
            <div className="text-center">
              <p className="uppercase text-sm font-semibold text-[#91765A]">
                what we're offering
              </p>
              <h3 className="text-3xl text-[#14100C] font-bold">
                Barber Services
              </h3>
              <div className="py-10 grid grid-cols-1 gap-20 md:gap-4 md:grid-cols-3 lg:gap-10">
                <div className="border-b-2 border-[#6B6E69] hover:border-[#9e682f] transition-all duration-200">
                  <div className=" flex justify-center relative bg-cover bg-no-repeat overflow-hidden ">
                    <Image
                      src={barber_img_1}
                      alt="barber_image"
                      height={400}
                      width={400}
                      className="w-full bg-cover hover:scale-110 ease-in-out transition-all duration-300"
                    />
                  </div>
                  <h2 className="text-black font-bold text-2xl py-4">
                    Hair Cut
                  </h2>
                  <p className="px-16 text-center md:px-0 ">
                    Hair cut amet ravida haretra nuam the drana miss uctus enec
                    accumsan.
                  </p>
                  <p className="text-4xl py-4 font-semibold text-[#9e682f]">
                    $30
                  </p>
                </div>
                <div className="border-b-2 border-[#6B6E69] hover:border-[#e07503] transition-all duration-200">
                  <div className=" flex justify-center relative bg-cover bg-no-repeat overflow-hidden ">
                    <Image
                      src={barber_img_2}
                      alt="barber_image"
                      height={400}
                      width={400}
                      className="w-full bg-cover hover:scale-110 ease-in-out transition-all duration-300"
                    />
                  </div>
                  <h2 className="text-black font-bold text-2xl py-4">
                    Beard Trim
                  </h2>
                  <p className="px-16 text-center md:px-0">
                    Shaves ons amet ravida haretra nuam the drana miss uctus
                    enec accumsan.
                  </p>
                  <p className="text-4xl py-4 font-semibold text-[#9e682f]">
                    $20
                  </p>
                </div>
                <div className="border-b-2 border-[#6B6E69] hover:border-[#e07503] transition-all duration-200">
                  <div className=" flex justify-center relative bg-cover bg-no-repeat overflow-hidden ">
                    <Image
                      src={barber_img_3}
                      alt="barber_image"
                      height={400}
                      width={400}
                      className="w-full bg-cover hover:scale-110 ease-in-out transition-all duration-300"
                    />
                  </div>
                  <h2 className="text-black font-bold text-2xl py-4">
                    Hair Wash
                  </h2>
                  <p className="px-16 text-center md:px-0">
                    Hair wash amet ravida haretra nuam the drana miss uctus enec
                    accumsan.
                  </p>
                  <p className="text-4xl py-4 font-semibold text-[#9e682f]">
                    $15
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ================================= */}
      <section>
        <div className="about_bg_img_2 w-full py-20 lg:py-28">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl lg:text-5xl text-center font-semibold text-white lg:px-80">
              Watch Our Barbershop Promo Video
            </h2>
            <div className="flex justify-center pt-10">
              <Link
                href={"#"}
                className="border-2 p-4 text-white rounded-full flex items-center justify-center hover:text-[#91765A] hover:border-[#91765A] transition-all duration-300 hover:scale-95"
              >
                <PiPlayLight className=" text-4xl" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* ===================================== */}
    </section>
  );
}
