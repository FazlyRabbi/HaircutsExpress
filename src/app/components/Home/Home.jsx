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
import { BiKnife } from "react-icons/bi";
import Header from "../Header";
import Footer from "../Footer";

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
                  All Walk -ins Welcome
                </p>
                <h3 className="text-3xl lg:text-4xl font-bold text-black">
                  Haircuts Barber Shop
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
                <div className="">
                  <Image
                    src={about_img_2}
                    alt="about_image"
                    className="custom__shadow "
                  />
                </div>

                <div  className="mt-28 ">
                  <Image
                    src={about_img_1}
                    alt="about_image"
                    className=" -ml-[3rem] "
                  />
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
                            className="w-full shadow-md bg-cover hover:scale-110 ease-in-out transition-all duration-300"
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
                      <div className="border-b-2 border-[#6B6E69] hover:border-[#e07503]  transition-all duration-200">
                        <div className=" flex justify-center relative bg-cover bg-no-repeat overflow-hidden ">
                          <Image
                            src={barber_img_2}
                            alt="barber_image"
                            height={400}
                            width={400}
                            className="w-full bg-cover  shadow-md hover:scale-110 ease-in-out transition-all duration-300"
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

      {/* ======footer top secton===== */}

      <section className=" footerTop py-[6rem]">
        <div className=" container mx-auto  md:px-[8rem] px-4 ">
          <div className=" grid   gap-y-10 lg:gap-y-0 lg:grid-cols-2 items-center gap-x-10 ">
            <div className="content  ">
              <h1 className=" text-white text-2xl  font-bold">
                We Are Best Barbers
              </h1>
              <h1 className=" text-white text-2xl  font-bold">
                & Hair Cutting Salon
              </h1>
              <h1 className=" text-white text-2xl  font-bold">at NYC.</h1>

              <div className="mt-10">
                <div className="flex items-center space-x-2">
                  <BiKnife className=" text-[#86765A] text-6xl" />
                  <div>
                    <h3 className=" uppercase text-sm text-[#86765A] font-semibold">
                      Appointemnt
                    </h3>
                    <h3 className=" text-2xl  text-white font-bold ">
                      516.490.1330
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            <div className=" bg-[#F5EEE7] p-8 py-12 w-full card md:max-w-[30rem]">
              <div>
                <h1 className=" font-bold mb-4  md:text-2xl text-xl text-black text-center">
                  Make An Appointment
                </h1>

                <form>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
                    <input
                      type="text"
                      className=" bg-[#FFFFFF]  mt-4  placeholder:text-black focus-within:outline-none md:py-4 md:px-6 py-2 px-6"
                      placeholder="Name"
                    />
                    <input
                      type="number"
                      className=" bg-[#FFFFFF]  mt-4  placeholder:text-black focus-within:outline-none md:py-4 md:px-6 py-2 px-6"
                      placeholder="Phone"
                    />
                    <input
                      type="date"
                      className=" bg-[#FFFFFF]  mt-4  placeholder:text-black focus-within:outline-none md:py-4 md:px-6 py-2 px-6"
                      placeholder="Phone"
                    />
                    <input
                      type="time"
                      className=" bg-[#FFFFFF]  mt-4  placeholder:text-black focus-within:outline-none md:py-4 md:px-6 py-2 px-6"
                      placeholder="Phone"
                    />
                    <select className=" bg-[#FFFFFF]  mt-4  placeholder:text-black focus-within:outline-none py-4 px-6">
                      <option value="option1">Option 1</option>
                      <option value="option2">Option 2</option>
                      <option value="option3">Option 3</option>
                    </select>
                    <select className=" bg-[#FFFFFF]  mt-4  placeholder:text-black focus-within:outline-none py-4 px-6">
                      <option value="option1">Option 1</option>
                      <option value="option2">Option 2</option>
                      <option value="option3">Option 3</option>
                    </select>
                  </div>

                  <button className=" mt-8 hover:bg-[#000] bg-[#91765A] text-white font-semibold  w-full md:p-4 p-2">
                    Make Appointment
                  </button>
                </form>
              </div>
            </div>
            
          </div>
        </div>
      </section>
      <Footer />
      {/* ======footer top secton===== */}
    </section>
  );
}

export default Home;
