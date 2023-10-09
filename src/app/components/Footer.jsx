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
    <div className="container mx-auto px-4 py-10">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div>
          <div>
            {/* <Image src={logo} alt="footerlogo" height={200} width={170} /> */}
          </div>
          <h3 className="py-3 text-white text-xl">Information</h3>
          <div className="flex items-center gap-3 py-2">
            <Link href="#" className="p-1 pr-3 border-r-2 border-[#AFAAA9]">
              <FaFacebookF className="text-black hover:text-[#C59D5F] text-[1.1rem]  transition-all duration-200" />
            </Link>
            <Link href="#" className="p-1 pr-3 border-r-2 border-[#AFAAA9]">
              <FaTwitter className="text-black hover:text-[#C59D5F] text-[1.1rem]  transition-all duration-200" />
            </Link>
            <Link href="#" className="p-1 pr-3 border-r-2 border-[#AFAAA9]">
              <FaInstagram className="text-black hover:text-[#C59D5F] text-[1.1rem]  transition-all duration-200" />
            </Link>
            <Link href="#" className="p-1">
              <FaLinkedinIn className="text-black hover:text-[#C59D5F] text-[1.1rem]  transition-all duration-200" />
            </Link>
          </div>
        </div>
        <div className="text-black">
          <h3 className="uppercase text-2xl">contact info</h3>
          <div className="py-4">
            <Link
              href={"#"}
              className="text-sm text-[#3b3a3a] hover:text-[#C59D5F] transition-all duration-200"
            >
              6 West Broadway, New York,
              <br />
              NY10012, USA
            </Link>
          </div>
          <div className="">
            <Link
              href={"#"}
              className="text-sm text-[#3b3a3a]hover:text-[#C59D5F] transition-all duration-200"
            >
              ingo@example.com
            </Link>
          </div>
          <Link
            href={"#"}
            className="text-sm text-[#979595] hover:text-[#C59D5F] transition-all duration-200"
          >
            212-308-3838
          </Link>
        </div>
        <div className="text-black">
          <h3 className="uppercase text-2xl">SUBSCRIBE</h3>
          <div className="py-4">
            <input
              type="email"
              placeholder="Email"
              className="text-lg border-2 w-full py-2 px-5 text-black placeholder-[#272626] focus:outline-none"
            />
            <button
              type="submit"
              className="mt-4 text-sm py-1 px-4 border-[1px] border-black bg-black text-white hover:bg-white hover:text-black transition-all duration-200 "
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
  );
}

export default Footer;
