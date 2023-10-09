"use client";
import React from "react";
import Image from "next/image";
import Hero from "../Hero";
import about_img_1 from "../../img/about_img_1.jpg";
import about_img_2 from "../../img/about_img_2.jpg";
import { GiCheckMark } from "react-icons/gi";
import barber_img_1 from "../../img/barber_Image_1.jpg";
import barber_img_2 from "../../img/barber_Image_2.jpg";
import barber_img_3 from "../../img/barber_Image_3.jpg";
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

            <section>
              <div className="bg-[#F5EEE7] w-full py-20">
                <div className="container mx-auto px-4 ">
                  <div className="text-center">
                    <p className="uppercase text-sm font-semibold text-[#91765A]">
                      what were offering
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
                          Hair cut amet ravida haretra nuam the drana miss uctus
                          enec accumsan.
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
                          Shaves ons amet ravida haretra nuam the drana miss
                          uctus enec accumsan.
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
                          Hair wash amet ravida haretra nuam the drana miss
                          uctus enec accumsan.
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
              <div className="bg-[#F5EEE7] w-full py-10">
                <div className="container mx-auto px-4">
                  <div className="text-center pb-5">
                    <p className="font-semibold lg:text-lg text-[#91765A]">
                      our services
                    </p>
                    <h2 className="text-4xl lg:text-5xl font-bold text-[#14100C]">
                      We Also Offer
                    </h2>
                  </div>
                  <div className="py-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                    <div className="bg-white text-center w-full py-10 shadow-lg rounded-lg text-[#14100C] hover:text-[#91765A] transition-all duration-300">
                      <div className="flex flex-col gap-3  items-center">
                        <IoIosCut className="text-5xl text-[#91765A]" />
                        <h3 className="text-3xl font-bold">Moustache Trim</h3>
                        <p className="text-center px-10 text-[#6B6E69]">
                          Lorem vulputate nassa ons ame racida haretra nuam the
                          darnaa miss uctis ence accumsan aliquam sit sapien.
                        </p>
                      </div>
                    </div>

                    <div className="bg-white text-center w-full py-10 shadow-lg rounded-lg text-[#14100C] hover:text-[#91765A] transition-all duration-300">
                      <div className="flex flex-col gap-3  items-center">
                        <IoIosCut className="text-5xl text-[#91765A]" />
                        <h3 className="text-3xl font-bold">Face Shave</h3>
                        <p className="text-center px-10 text-[#6B6E69]">
                          Lorem vulputate nassa ons ame racida haretra nuam the
                          darnaa miss uctis ence accumsan aliquam sit sapien.
                        </p>
                      </div>
                    </div>

                    <div className="bg-white text-center w-full py-10 shadow-lg rounded-lg text-[#14100C] hover:text-[#91765A] transition-all duration-300">
                      <div className="flex flex-col gap-3  items-center">
                        <IoIosCut className="text-5xl text-[#91765A]" />
                        <h3 className="text-3xl font-bold">Beard Trim</h3>
                        <p className="text-center px-10 text-[#6B6E69]">
                          Lorem vulputate nassa ons ame racida haretra nuam the
                          darnaa miss uctis ence accumsan aliquam sit sapien.
                        </p>
                      </div>
                    </div>

                    <div className="bg-white text-center w-full py-10 shadow-lg rounded-lg text-[#14100C] hover:text-[#91765A] transition-all duration-300">
                      <div className="flex flex-col gap-3  items-center">
                        <IoIosCut className="text-5xl text-[#91765A]" />
                        <h3 className="text-3xl font-bold">Haircut</h3>
                        <p className="text-center px-10 text-[#6B6E69]">
                          Lorem vulputate nassa ons ame racida haretra nuam the
                          darnaa miss uctis ence accumsan aliquam sit sapien.
                        </p>
                      </div>
                    </div>

                    <div className="bg-white text-center w-full py-10 shadow-lg rounded-lg text-[#14100C] hover:text-[#91765A] transition-all duration-300">
                      <div className="flex flex-col gap-3  items-center">
                        <IoIosCut className="text-5xl text-[#91765A]" />
                        <h3 className="text-3xl font-bold">Clipper Cut</h3>
                        <p className="text-center px-10 text-[#6B6E69]">
                          Lorem vulputate nassa ons ame racida haretra nuam the
                          darnaa miss uctis ence accumsan aliquam sit sapien.
                        </p>
                      </div>
                    </div>

                    <div className="bg-white text-center w-full py-10 shadow-lg rounded-lg text-[#14100C] hover:text-[#91765A] transition-all duration-300">
                      <div className="flex flex-col gap-3  items-center">
                        <IoIosCut className="text-5xl text-[#91765A]" />
                        <h3 className="text-3xl font-bold">Facial & Massage</h3>
                        <p className="text-center px-10 text-[#6B6E69]">
                          Lorem vulputate nassa ons ame racida haretra nuam the
                          darnaa miss uctis ence accumsan aliquam sit sapien.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Home;
