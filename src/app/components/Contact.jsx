import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BsInstagram } from "react-icons/bs";
import { FaMapLocationDot, FaPhone } from "react-icons/fa";

import {MdLocationPin} from "react-icons/md"
import {TbMail} from "react-icons/tb"


function Contact() {
  return (
    <section>
      <div className=" w-full ">
        <div className="">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="bg-black py-10">
              <div className=" container mx-auto px-4">
                <div className="space-y-6">
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full py-2 px-4 bg-black text-white border-b-2 border-[#272727] focus:outline-none"
                  />

                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full py-2 px-4 bg-black text-white border-b-2 border-[#272727] focus:outline-none"
                  />

                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="w-full py-2 px-4 bg-black text-white border-b-2 border-[#272727] focus:outline-none"
                  />

                  <textarea
                    name="text"
                    placeholder="Comment"
                    rows="6"
                    className="w-full py-2 px-4 bg-black text-white border-b-2 border-[#272727] focus:outline-none"
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="bg-white w-full py-10">
              <div className="container mx-auto px-4 lg:px-10">
                <div className="text-center">
                  <h3 className="text-4xl">Get In Touch With Us</h3>
                  <p className="text-xl text-[#6d6c6c] py-5">
                    Many ways to reach us:
                  </p>
                  <div className="py-5 grid grid-cols-1 gap-5 md:grid-cols-2 lg:gap-8">
                    <div className="text-start"> 
                      <div className="flex gap-4">
                        <BsInstagram className="text-[#E2AE10] text-[1.2rem]" />
                        <div className="flex flex-col">
                        <p>@FindYourAdress</p>
                        <div className="
                      ">
                        <Link
                          href={"#"}
                          className="text-[#6d6c6c] text-sm hover:text-[#E2AE10]"
                        >
                          Follow Us On Instagram
                        </Link>
                      </div>
                        </div>
                      </div>
                      
                    </div>

                    <div>
                      <div className="flex  gap-4">
                        <MdLocationPin className="text-[#E2AE10] text-[1.5rem]" />
                        <div className="flex flex-col">
                        <p>123 New York, NY 606</p>
                      <div className="">
                        <Link
                          href={"#"}
                          className="text-[#6d6c6c] text-sm hover:text-[#E2AE10]"
                        >
                          Follow Us On Instagram
                        </Link>
                      </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="flex  gap-4">
                        <FaPhone className="text-[#E2AE10] text-[1.5rem]" />
                        <div className="flex flex-col">
                        <p>9666 5565 65565 645</p>
                      <div className="">
                        <Link
                          href={"#"}
                          className="text-[#6d6c6c] text-sm hover:text-[#E2AE10]"
                        >
                          Contact Us On telephone
                        </Link>
                      </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="flex  gap-4">
                        <TbMail className="text-[#E2AE10] text-[1.5rem]" />
                        <div className="flex flex-col">
                        <p>info@example.com</p>
                      <div className="">
                        <Link
                          href={"#"}
                          className="text-[#6d6c6c] text-sm hover:text-[#E2AE10] "
                        >
                          Contact Us On Mail
                        </Link>
                      </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
