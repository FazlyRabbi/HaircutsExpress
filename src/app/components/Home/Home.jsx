"use client";
import React from "react";
import Image from "next/image";
import Hero from "../Hero";
import about_img_1 from "../../img/about_img_1.jpg";
import about_img_2 from "../../img/about_img_2.jpg";
import { GiCheckMark } from "react-icons/gi";
import { IoIosCut } from "react-icons/io";
import Header from "../Header";

function Home() {
  return (
    <section className="  relative">
      <Header />
      {/* hero sections start */}
      <Hero />

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
                      We&apos;re professional and certified barbers
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
    </section>
  );
}

export default Home;
