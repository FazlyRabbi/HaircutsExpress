import React from "react";
import Image from "next/image";

import Link from "next/link";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

function Footer() {
  return (
    <div className=" bg-[#14100C]">
      <div className="container mx-auto px-4 py-10 ">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div>
            <div>
              <h1 className=" text-2xl text-white font-semibold ">
                Hairecutes Express llc
              </h1>
            </div>
            <p className="text-[#aba59f] text-sm py-4">
              Looking for a great haircut in Queens NY, but not sure exactly
              what you want? We will listen to your ideas and come up with a
              solution for your hair that you will feel proud off! Confidence is
              what keeps our clients coming back. Plus, we can also complement
              your cut with a rich, beautiful hair color, highlights, or makeup.
            </p>
            <div className="flex items-center gap-3 py-2">
              <Link href="#" className="p-1 pr-3 ">
                <FaFacebookF className=" text-[#91765a] hover:text-[#C59D5F] text-[1.1rem]  transition-all duration-200" />
              </Link>
              <Link href="#" className="p-1 pr-3 ">
                <FaTwitter className=" text-[#91765a] hover:text-[#C59D5F] text-[1.1rem]  transition-all duration-200" />
              </Link>
              <Link href="#" className="p-1 pr-3 ">
                <FaInstagram className=" text-[#91765a] hover:text-[#C59D5F] text-[1.1rem]  transition-all duration-200" />
              </Link>
              <Link href="#" className="p-1">
                <FaLinkedinIn className=" text-[#91765a] hover:text-[#C59D5F] text-[1.1rem]  transition-all duration-200" />
              </Link>
            </div>
          </div>
          <div className="">
            <h3 className="uppercase text-2xl  font-semibold text-white">
              contact info
            </h3>
            <div className="py-4">
              <Link
                href={"#"}
                className="text-sm  hover:text-[#C59D5F] transition-all duration-200  text-[#aba59f]"
              >
                6 West Broadway, New York,
                <br />
                NY10012, USA
              </Link>
            </div>
            <div className="">
              <Link
                href={"#"}
                className="text-sm text-[#aba59f] hover:text-[#C59D5F] transition-all duration-200"
              >
                ingo@example.com
              </Link>
            </div>
            <Link
              href={"#"}
              className="text-sm text-[#979595] hover:text-[#C59D5F] transition-all duration-200"
            >
              (917)855-8530
            </Link>
          </div>
          <div className="text-black">
            <h3 className="uppercase text-2xl  text-white">SUBSCRIBE</h3>
            <div className="py-4">
              <input
                type="email"
                placeholder="Email"
                className="text-lg border-2 w-full py-2 px-5 text-black placeholder-[#272626] focus:outline-none"
              />
              <button
                type="submit"
                className="mt-4 text-sm py-1 px-4 border-[1px] border-[#E2AE10] bg-[#91765a] hover:bg-white text-white  hover:text-black transition-all duration-200 "
              >
                Subscribe
              </button>
            </div>
            <p className="text-sm text-[#979595]">
              *Be the first to know about offers
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
