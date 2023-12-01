import React from "react";

import Link from "next/link";
import { ClockIcon } from "@heroicons/react/24/outline";
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
              <h1 className=" text-2xl font-co text-white font-semibold ">
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
            <h3 className=" text-2xl font-co  font-semibold text-white">
              Contact Info
            </h3>
            <div className="py-4"></div>
            <div className="">
              <p className="text-sm text-[#aba59f] hover:text-[#C59D5F] transition-all duration-200">
                3330 Hillsside Ave, New Hide Park, NY 11040
              </p>

              <Link
                href={"#"}
                className="text-sm text-[#aba59f] hover:text-[#C59D5F] transition-all duration-200"
              >
                services@haircutexpressllc.com
              </Link>
            </div>
            <Link
              href={"#"}
              className="text-sm text-[#979595] hover:text-[#C59D5F] transition-all duration-200"
            >
              516.490.1330
            </Link>
          </div>
          <div className="mt-[1rem] flex    space-x-4">
            <ClockIcon className="h-7 w-7 text-white  " />

            <div className=" space-y-2 text-white">
              <div className="flex space-x-8 ">
                <div>Mon</div>
                <div>10:00 AM - 6:00 PM</div>
              </div>

              <div className="flex space-x-8 ">
                <div>Tue</div>
                <div>10:00 AM - 6:00 PM</div>
              </div>
              <div className="flex space-x-8 ">
                <div>Wed</div>
                <div>10:00 AM - 6:00 PM</div>
              </div>
              <div className="flex space-x-8 ">
                <div>Thu</div>
                <div>10:00 AM - 6:00 PM</div>
              </div>
              <div className="flex space-x-8 ">
                <div>Fri</div>
                <div>10:00 AM - 6:00 PM</div>
              </div>
              <div className="flex space-x-8 ">
                <div>Sat</div>
                <div>10:00 AM - 6:00 PM</div>
              </div>
              <div className="flex space-x-8 ">
                <div>Sun</div>
                <div>10:00 AM - 3:00 PM</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
