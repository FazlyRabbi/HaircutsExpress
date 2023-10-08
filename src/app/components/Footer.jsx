import React from "react";
import Image from "next/image";
import Link from "next/link";
import footer_img from "../img/footer-img-1.png";
import footer_img_2 from "../img/footer-img-2.png";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

function Footer() {
  return (
    <section>
      <div className="bg-black w-full py-20">
        <div className="container mx-auto px-8 lg:px-20">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-2">
            <div>
              <div>
                <Image
                 src={footer_img} 
                 alt="footerlogo"
                 height={200}
                 width={170} 
                 />
              </div>
              <p className="text-[#979595] text-sm py-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                eiusmod tempor incididunt. Ut
              </p>
              <div className="flex items-center gap-3 py-2">
                <Link href="#" className="p-1 pr-3 border-r-2 border-[#AFAAA9]">
                  <FaFacebookF className="text-white hover:text-[#C59D5F] text-[1.1rem]  transition-all duration-200" />
                </Link>
                <Link href="#" className="p-1 pr-3 border-r-2 border-[#AFAAA9]">
                  <FaTwitter className="text-white hover:text-[#C59D5F] text-[1.1rem]  transition-all duration-200" />
                </Link>
                <Link href="#" className="p-1 pr-3 border-r-2 border-[#AFAAA9]">
                  <FaInstagram className="text-white hover:text-[#C59D5F] text-[1.1rem]  transition-all duration-200" />
                </Link>
                <Link href="#" className="p-1">
                  <FaLinkedinIn className="text-white hover:text-[#C59D5F] text-[1.1rem]  transition-all duration-200" />
                </Link>
              </div>
            </div>
            <div className="text-white">
              <h3 className="uppercase text-3xl font-semibold">contact</h3>
              <div className="py-4">
                <Link
                  href={"#"}
                  className="text-sm text-[#979595] hover:text-[#C59D5F] transition-all duration-200"
                >
                  6 West Broadway, New York,
                  <br />
                  NY10012, USA
                </Link>
              </div>
              <div className="">
                <Link
                  href={"#"}
                  className="text-sm text-[#979595] hover:text-[#C59D5F] transition-all duration-200"
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
            <div>
                <h3 className="uppercase text-3xl font-semibold text-white ">info</h3>
                <div className="py-3 md:pr-10 space-y-1">
                    <div className="flex justify-between ">
                        <p className="text-[#979595]">Working Days</p>
                        <p className="text-[#979595] ">9AM-9pm</p>
                    </div>
                    <div className="flex justify-between ">
                        <p className="text-[#979595]">Saturday</p>
                        <p className="text-[#979595] ">10AM-8pm</p>
                    </div>
                    <div className="flex justify-between ">
                        <p className="text-[#979595]">Sunday</p>
                        <p className="text-[#979595] ">Closed</p>
                    </div>

                </div>
            </div>
            <div>
                <h3 className="uppercase text-white text-2xl font-semibold">maps</h3>
                <div className="py-6">
                    <Image
                     src={footer_img_2}
                     alt="footer_img"
                    />
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
