"use client";
import React, { useState } from "react";
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
import shape from "../../img/title_shape_1.svg";
import price from "../../img/price_1_1.jpg";
import { Spinner } from "@material-tailwind/react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import b1 from "../../img/b.webp";
import b2 from "../../img/b2.webp";

const notify = () =>
  toast.success("Thanks For Contact With Us!", {
    position: "bottom-right",
  });

const init = {
  name: "",
  email: "",
  phoneNumber: "",
  serviceName: "",
  Message: "",
};

function Home() {
  const [contact, setContact] = useState(init);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      // Make a POST request using Axios
      const response = await axios.post(
        `${process.env.API_URL}/contact`,
        contact
      );

      if (response.data.ok) {
        setIsLoading(false);
        notify();
        setContact(init);
       
        return;
      } else {
        setIsLoading(false);
      }
    } catch (error) {
      // Handle errors that occurred during the request
      console.error("Error making POST request:", error);

      // You can throw the error to propagate it up the call stack
      throw error;
    }
    // Update the 'date' state, triggering a re-fetch of the data
  };

  return (
    <section className="  relative">
      <Header />
      {/* hero sections start */}
      <Hero />

      <section>
        <div className=" w-full ">
           <div className=" bg-[#F5EEE7] py-20">

          <div className="container mx-auto px-4">
            <div className=" grid grid-cols-1 gap-5 lg:grid-cols-2">
              <div className="">
                <p className="uppercase text-[#91765A] font-co font-semibold tracking-[1px]">
                  All Walk -ins Welcome
                </p>
                <h3 className="text-3xl  lg:text-5xl font-co font-bold text-black">
                  Haircuts Barber Shop
                </h3>
                <p className="text-sm text-[#6B6E69] py-4  pr-[5rem] leading-[20px]">
                  Come experience a unique and edgy barbershop for all your hair
                  and beard needs. ravida haretra nuam enim mi obortis eset
                  uctus enec accumsan eu justo alisuame amet auctor orci donec
                  vitae vehicula risus.
                </p>
                <p className="text-sm text-[#6B6E69] leading-[20px] pr-[5rem]">
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

                <div className="mt-28 ">
                  <Image
                    src={about_img_1}
                    alt="about_image"
                    className=" -ml-[3rem] "
                  />
                </div>
              </div>
            </div>

            {/* <div className="py-20">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:gap-6">
                <div className="flex gap-5">
                  <div>
                    <IoIosCut className="text-[#AA947D] text-5xl" />
                  </div>
                  <div>
                    <h4 className="text-black font-bold text-3xl font-co">
                      Cuts
                    </h4>
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
                    <h4 className="text-black font-bold text-3xl font-co">
                      Fades
                    </h4>
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
                    <h4 className="text-black font-bold text-3xl font-co">
                      Shaves
                    </h4>
                    <p className="text-sm text-[#6B6E69] py-2 leading-[23px]">
                      Shaves ut nisl quam nestibulum drana odio elementum
                      sceisue the can golden varius the dis monte.
                    </p>
                  </div>
                </div>
              </div>
            </div> */}

            {/* <section>
              <div className="bg-[#F5EEE7] w-full py-20">
                <div className="container mx-auto px-4 ">
                  <div className="text-center">
                    <p className="uppercase font-co text-sm font-semibold text-[#91765A]">
                      what were offering
                    </p>
                    <h3 className="text-5xl font-co text-[#14100C] font-bold">
                      Barber Services
                    </h3>
                    <div className="py-10 grid grid-cols-1 gap-20 md:gap-4 md:grid-cols-3 lg:gap-10">
                      <div className=" hover:border-[#9e682f] transition-all duration-200">
                        <div className=" flex justify-center relative bg-cover bg-no-repeat overflow-hidden ">
                          <Image
                            src={barber_img_1}
                            alt="barber_image"
                            height={400}
                            width={400}
                            className="w-full custom__shadow bg-cover hover:scale-110 ease-in-out transition-all duration-300"
                          />
                        </div>
                        <h2 className="font-co text-black font-bold text-2xl py-4">
                          Hair Cut
                        </h2>
                        <p className="px-16 text-center md:px-0 ">
                          Hair cut amet ravida haretra nuam the drana miss uctus
                          enec accumsan.
                        </p>
                        <p className="text-4xl  font-co py-4 font-semibold text-[#9e682f]">
                          $30
                        </p>
                      </div>
                      <div className=" hover:border-[#e07503]  transition-all duration-200">
                        <div className=" flex justify-center relative bg-cover bg-no-repeat overflow-hidden ">
                          <Image
                            src={barber_img_2}
                            alt="barber_image"
                            height={400}
                            width={400}
                            className="w-full custom__shadow bg-cover  hover:scale-110 ease-in-out transition-all duration-300"
                          />
                        </div>
                        <h2 className="font-co text-black font-bold text-2xl py-4">
                          Beard Trim
                        </h2>
                        <p className="px-16 text-center md:px-0">
                          Shaves ons amet ravida haretra nuam the drana miss
                          uctus enec accumsan.
                        </p>
                        <p className="text-4xl font-co py-4 font-semibold text-[#9e682f]">
                          $20
                        </p>
                      </div>
                      <div className=" hover:border-[#e07503] transition-all duration-200">
                        <div className=" flex justify-center relative bg-cover bg-no-repeat overflow-hidden ">
                          <Image
                            src={barber_img_3}
                            alt="barber_image"
                            height={400}
                            width={400}
                            className="w-full bg-cover custom__shadow{ hover:scale-110 ease-in-out transition-all duration-300"
                          />
                        </div>
                        <h2 className="font-co text-black font-bold text-2xl py-4">
                          Hair Wash
                        </h2>
                        <p className="px-16 text-center md:px-0">
                          Hair wash amet ravida haretra nuam the drana miss
                          uctus enec accumsan.
                        </p>
                        <p className="text-4xl font-co py-4 font-semibold text-[#9e682f]">
                          $15
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section> 

            {/* ================================= */}
          </div>
           </div>
          <section className=" relative pt-[6rem]">
            <Image
              src={b2}
              alt="b1"
              className="  -z-10 absolute  left-20 top-[5rem] "
            />
            <Image
              src={b1}
              alt="b1"
              className="  -z-10 absolute  right-10 bottom-20 "
            />
            <div className="container mx-auto">
              <div className=" w-full py-10">
              
              
                <div className="container mx-auto px-4">
                 
                 
                 
                  <div className="text-center pb-5">
                    <p className="font-semibold font-co lg:text-lg text-[#91765A]">
                      what we are offering
                    </p>
                    <h2 className="text-4xl font-co lg:text-5xl font-bold text-[#14100C]">
                      Barber Services
                    </h2>
                  </div>


                  <div
                    className="py-10
      
      
      grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
                  >


                    <div className="service_bg_img h-[20rem] bg-white text-center w-full py-10 custom__shadow  text-[#14100C] hover:text-[#91765A] transition-all duration-300">
                      <div className="flex flex-col gap-3  items-center">
                        <IoIosCut className="text-5xl text-[#91765A]" />
                        <h3 className="text-3xl  font-bold">Moustache Trim</h3>
                        <p className="text-center px-10 text-[#6B6E69]">
                          Lorem vulputate nassa ons ame racida haretra nuam the
                          darnaa miss uctis ence accumsan aliquam sit sapien.
                        </p>
                      </div>
                    </div>

                    <div className="bg-white service_bg_img h-[20rem]  text-center w-full py-10 custom__shadow text-[#14100C] hover:text-[#91765A] transition-all duration-300">
                      <div className="flex flex-col gap-3  items-center">
                        <IoIosCut className="text-5xl text-[#91765A]" />
                        <h3 className="text-3xl  font-bold">Face Shave</h3>
                        <p className="text-center px-10 text-[#6B6E69]">
                          Lorem vulputate nassa ons ame racida haretra nuam the
                          darnaa miss uctis ence accumsan aliquam sit sapien.
                        </p>
                      </div>
                    </div>

                    <div className="bg-white service_bg_img h-[20rem] text-center w-full py-10 custom__shadow  text-[#14100C] hover:text-[#91765A] transition-all duration-300">
                      <div className="flex flex-col gap-3  items-center">
                        <IoIosCut className="text-5xl text-[#91765A]" />
                        <h3 className="text-3xl  font-bold">Beard Trim</h3>
                        <p className="text-center px-10 text-[#6B6E69]">
                          Lorem vulputate nassa ons ame racida haretra nuam the
                          darnaa miss uctis ence accumsan aliquam sit sapien.
                        </p>
                      </div>
                    </div>

                    <div className="bg-white  service_bg_img h-[20rem]text-center w-full py-10 custom__shadow  text-[#14100C] hover:text-[#91765A] transition-all duration-300">
                      <div className="flex flex-col gap-3  items-center">
                        <IoIosCut className="text-5xl text-[#91765A]" />
                        <h3 className="text-3xl  font-bold">Haircut</h3>
                        <p className="text-center px-10 text-[#6B6E69]">
                          Lorem vulputate nassa ons ame racida haretra nuam the
                          darnaa miss uctis ence accumsan aliquam sit sapien.
                        </p>
                      </div>
                    </div>

                    <div className="bg-white service_bg_img h-[20rem] text-center w-full py-10 custom__shadow  text-[#14100C] hover:text-[#91765A] transition-all duration-300">
                      <div className="flex flex-col gap-3  items-center">
                        <IoIosCut className="text-5xl text-[#91765A]" />
                        <h3 className="text-3xl  font-bold">Clipper Cut</h3>
                        <p className="text-center px-10 text-[#6B6E69]">
                          Lorem vulputate nassa ons ame racida haretra nuam the
                          darnaa miss uctis ence accumsan aliquam sit sapien.
                        </p>
                      </div>
                    </div>

                    <div className="bg-white service_bg_img h-[20rem] text-center w-full py-10 custom__shadow  text-[#14100C] hover:text-[#91765A] transition-all duration-300">
                      <div className="flex flex-col gap-3  items-center">
                        <IoIosCut className="text-5xl text-[#91765A]" />
                        <h3 className="text-3xl  font-bold">
                          Facial & Massage
                        </h3>
                        <p className="text-center px-10 text-[#6B6E69]">
                          Lorem vulputate nassa ons ame racida haretra nuam the
                          darnaa miss uctis ence accumsan aliquam sit sapien.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <image src="b1" alt="b1"   className=" absolute"/> */}
          </section>
        </div>
      </section>

      {/* =====new section==== */}
      <section className="py-[10rem] bg-[#F5EEE7] mt-5">
        <div className="  text-center container mx-auto">
          <div className=" flex flex-col space-y-4 justify-center items-center">
            <h1>Pricing Package</h1>
            <Image src={shape} alt="shape" />
            <h1>Choose Your Perfect Package</h1>
          </div>

          <div className=" flex  justify-between space-x-5 ">
            <div>
              <div className="mt-5  border bg-white border-[#f4e8e1] p-8    rounded-[50px]">
                <div className=" grid      items-center grid-cols-1 md:grid-cols-2">
                  <div className=" rounded-[200px]  relative">
                    {/* <div
                    className=" z-0 
                 right-0
                     top-[45%]  -translate-y-[15%]
                  
                  absolute p-10 rounded-[400px] border border-[#f4e8e1]"
                  >
                    <span className=" text-lg">46$</span>
                    <span className=" block  text-gray-400 text-sm">
                      Per Day
                    </span>
                  </div> */}

                    <Image
                      height={500}
                      width={500}
                      src={price}
                      alt="price"
                      className="border z-20 border-[#f4e8e1] p-4  rounded-[200px]"
                    />
                  </div>

                  <div>
                    <div className="   flex justify-center  items-center flex-col">
                      <h1 className=" font-co  text-left text-2xl">
                        Basic Package
                      </h1>

                      <span className=" mt-5 border block w-[10rem] border-b-0 border-l-0 border-r-0    border-[#f4e8e1] "></span>
                    </div>

                    <div className="mt-8">
                      <ul className="  space-y-5">
                        <li>Body Treatments</li>
                        <li>Body Treatments</li>
                        <li>Body Treatments</li>
                        <li>Body Treatments</li>
                        <li>Body Treatments</li>
                      </ul>
                      <button className="  bg-[#C28565] text-white transition-all duration-300 flex justify-center   text-sm   px-6 py-2 font-dm md:px-10 md:py-3 mt-5  ">
                        {isLoading ? (
                          <Spinner className="h-8 w-8 " />
                        ) : (
                          "Book Now"
                        )}
                      </button>
                      <Toaster />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="mt-5 bg-white  border border-[#f4e8e1] p-8    rounded-[50px]">
                <div className=" grid      items-center grid-cols-1 md:grid-cols-2">
                  <div className=" rounded-[200px]  relative">
                    {/* <div
                    className=" z-0 
                 right-0
                     top-[45%]  -translate-y-[15%]
                  
                  absolute p-10 rounded-[400px] border border-[#f4e8e1]"
                  >
                    <span className=" text-lg">46$</span>
                    <span className=" block  text-gray-400 text-sm">
                      Per Day
                    </span>
                  </div> */}

                    <Image
                      height={500}
                      width={500}
                      src={price}
                      alt="price"
                      className="border z-20 border-[#f4e8e1] p-4  rounded-[200px]"
                    />
                  </div>

                  <div>
                    <div className="  flex justify-center  items-center flex-col">
                      <h1 className=" font-co  text-left text-2xl">
                        Basic Package
                      </h1>

                      <span className=" mt-5 border block w-[10rem] border-b-0 border-l-0 border-r-0    border-[#f4e8e1] "></span>
                    </div>

                    <div className="mt-8">
                      <ul className="  space-y-5">
                        <li>Body Treatments</li>
                        <li>Body Treatments</li>
                        <li>Body Treatments</li>
                        <li>Body Treatments</li>
                        <li>Body Treatments</li>
                      </ul>
                      <button className="  bg-[#C28565] text-white transition-all duration-300 flex justify-center   text-sm   px-6 py-2 font-dm md:px-10 md:py-3 mt-5  ">
                        {isLoading ? (
                          <Spinner className="h-8 w-8 " />
                        ) : (
                          "Book Now"
                        )}
                      </button>
                      <Toaster />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* =====new section==== */}

      {/* ======footer top secton===== */}

      <section className=" footerTop py-[6rem]">
        <div className=" container mx-auto  md:px-[8rem] px-4 ">
          <div className=" grid   gap-y-10 lg:gap-y-0 lg:grid-cols-2 items-center gap-x-10 ">
            <div className="content  ">
              <h1 className=" text-white text-2xl  font-co font-bold">
                We Are Best Barbers
              </h1>
              <h1 className=" text-white text-2xl  font-co font-bold">
                & Hair Cutting Salon
              </h1>
              <h1 className=" text-white text-2xl  font-co font-bold">
                at NYC.
              </h1>

              <div className="mt-10">
                <div className="flex items-center space-x-2">
                  <BiKnife className=" text-[#86765A] text-6xl" />
                  <div>
                    <h3 className=" font-co uppercase text-sm text-[#86765A] font-semibold">
                      Appointemnt
                    </h3>
                    <h3 className=" font-co text-2xl  text-white font-bold ">
                      516.490.1330
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            <div className=" bg-[#F5EEE7] p-8 py-12 w-full card md:max-w-[30rem]">
              <div>
                <h1 className=" font-bold mb-4  md:text-2xl text-xl text-black text-center font-co">
                  Make An Appointment
                </h1>

                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
                    <input
                      value={contact.name}
                      onChange={(e) =>
                        setContact({ ...contact, name: e.target.value })
                      }
                      disabled={isLoading}
                      required
                      type="text"
                      className=" bg-[#FFFFFF]  mt-4  col-span-2 placeholder:text-black focus-within:outline-none md:py-4 md:px-6 py-2 px-6"
                      placeholder="Name"
                    />
                    {/* <input
                     value={contact.lastName}
                     onChange={(e) =>
                      setContact({ ...contact, lastName: e.target.value })
                    }
                      type="text"
                      className=" bg-[#FFFFFF]  mt-4  placeholder:text-black focus-within:outline-none md:py-4 md:px-6 py-2 px-6"
                      placeholder="Last Name"
                    /> */}

                    <input
                      value={contact.email}
                      onChange={(e) =>
                        setContact({ ...contact, email: e.target.value })
                      }
                      disabled={isLoading}
                      required
                      type="email"
                      className=" bg-[#FFFFFF]  mt-4  placeholder:text-black focus-within:outline-none md:py-4 md:px-6 py-2 px-6"
                      placeholder="Email"
                    />
                    <input
                      value={contact.phoneNumber}
                      onChange={(e) =>
                        setContact({ ...contact, phoneNumber: e.target.value })
                      }
                      disabled={isLoading}
                      required
                      type="number"
                      className=" bg-[#FFFFFF]  mt-4  placeholder:text-black focus-within:outline-none md:py-4 md:px-6 py-2 px-6"
                      placeholder="Phone"
                    />
                  </div>
                  <select
                    value={contact.serviceName}
                    onChange={(e) =>
                      setContact({ ...contact, serviceName: e.target.value })
                    }
                    disabled={isLoading}
                    required
                    className=" pr-5 bg-[#FFFFFF] nice mt-4
                    placeholder:text-black w-full focus-within:outline-none py-4
                    px-6"
                  >
                    <option value="option1">Express Haircuts</option>
                    <option value="option2">Express Shamt cut</option>
                    <option value="option3">Men Color</option>
                    <option value="option3">Highlights</option>
                    <option value="option3">Bang Trim</option>
                    <option value="option3">Beard Trim</option>
                    <option value="option3">
                      Deep Conditioning Treatments
                    </option>
                  </select>

                  <button type="submit" className=" mt-8 hover:bg-[#000] bg-[#91765A] text-white font-semibold  w-full md:p-4 p-2">
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
