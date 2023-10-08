import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import Image from "next/image";
import { Link } from "react-scroll";
import logo from "../img/logo.png";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Header() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resdize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-4 container mx-auto flex flex-col lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        className=" text-black hover:text-[#C59D5F] font-medium transition-all duration-200 "
      >
        <a
          href="#"
          className="flex items-center uppercase border-b-[1px] border-[#AFAAA9] pb-3 tracking-[4px] lg:border-none lg:pb-0"
        >
          Home
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className=" font-medium hover:text-[#C59D5F]  transition-all duration-200"
      >
        <a
          href="#"
          className="flex items-center uppercase border-b-[1px] border-[#AFAAA9] py-3 tracking-[4px] lg:border-none lg:py-0"
        >
          Pages
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className=" font-medium hover:text-[#C59D5F]  transition-all duration-200"
      >
        <a
          href="#"
          className="flex items-center uppercase border-b-[1px] border-[#AFAAA9] py-3 tracking-[4px] lg:border-none lg:py-0"
        >
          Portfolio
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className=" font-medium hover:text-[#C59D5F]  transition-all duration-200"
      >
        <a
          href="#"
          className="flex items-center uppercase border-b-[1px] border-[#AFAAA9] py-3 tracking-[4px] lg:border-none lg:py-0"
        >
          Blog
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className=" font-medium hover:text-[#C59D5F]  transition-all duration-200"
      >
        <a
          href="#"
          className="flex items-center uppercase border-b-[1px] border-[#AFAAA9] py-3 tracking-[4px] lg:border-none lg:py-0"
        >
          shop
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className=" font-medium hover:text-[#C59D5F]  transition-all duration-200"
      >
        <a
          href="#"
          className="flex items-center uppercase py-3 tracking-[4px] lg:py-0"
        >
          elements
        </a>
      </Typography>
    </ul>
  );

  return (
    <Navbar
      id="header"
      className="sticky top-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4"
    >
      <div className="flex items-center container mx-auto justify-between text-black ">
        <Typography
          as="a"
          href="#"
          className="mr-4 cursor-pointer py-1.5 transition-all duration-200"
        >
          <Image src={logo} height={120} width={135} alt="logo" />
        </Typography>
        <div className="flex items-center gap-4 lg:gap-10">
          <div className="mr-4 hidden lg:block">{navList}</div>
          <div className="hidden lg:block">
            <div className="flex items-center gap-3">
              <Link href="#" className="p-1 pr-3 border-r-2 border-[#AFAAA9]">
                <FaFacebookF className="hover:text-[#C59D5F] text-[1.2rem]  transition-all duration-200" />
              </Link>
              <Link href="#" className="p-1 pr-3 border-r-2 border-[#AFAAA9]">
                <FaTwitter className="hover:text-[#C59D5F] text-[1.2rem]  transition-all duration-200" />
              </Link>
              <Link href="#" className="p-1 pr-3 border-r-2 border-[#AFAAA9]">
                <FaInstagram className="hover:text-[#C59D5F] text-[1.2rem]  transition-all duration-200" />
              </Link>
              <Link href="#" className="p-1">
                <FaLinkedinIn className="hover:text-[#C59D5F] text-[1.2rem]  transition-all duration-200" />
              </Link>
            </div>
          </div>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden focus:text-[#C59D5F]"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
      </div>
      <MobileNav open={openNav}>{navList}</MobileNav>
    </Navbar>
  );
}
