"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";

export default function Header() {

  const [openNav, setOpenNav] = React.useState(false);

  const [scrollHeight, setScrollHeight] = useState(false);

  const handleScroll = () => {
    const currentScrollHeight = window.scrollY;

    // Call your function when the scroll height reaches 300 pixels
    if (currentScrollHeight >= 300) {
      // Call your function here
      setScrollHeight(true);
    } else if (currentScrollHeight === 0) {
      setScrollHeight(false);
    }
  };

  useEffect(() => {
    // Attach the event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures that this effect runs once after the initial render

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-10">
      <Typography
        as="li"
     
        color="blue-gray"
        className="p-1  font-bold   text-[1rem]   text-white"
      >
        <Link
          href="/"
          className="flex   hover:text-[#c9ab8c] items-center"
        >
   Home
        </Link>
      </Typography>
      <Typography
        as="li"
     
        color="blue-gray"
        className="p-1  font-bold   text-[1rem]   text-white"
      >
        <Link
          href="/"
          className="flex   hover:text-[#c9ab8c] items-center"
        >
          
          
          Gallery
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1  font-bold   text-[1rem]   text-white"
      >
        <Link
          href="/service"
          className="flex   hover:text-[#c9ab8c] items-center"
        >
          Service
        </Link>
      </Typography>

      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1  font-bold   text-[1rem]   text-white"
      >
        <Link
          href="/choose"
          className="flex   hover:text-[#c9ab8c] items-center"
        >
          Apoinment
        </Link>
      </Typography>

      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1  font-bold   text-[1rem]   text-white"
      >
        <Link
          href="/about"
          className="flex   hover:text-[#c9ab8c] items-center"
        >
          About
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1  font-bold   text-[1rem]   text-white"
      >
        <Link
          href="/about"
          className="flex   hover:text-[#c9ab8c] items-center"
        >
          Contact
        </Link>
      </Typography>
    </ul>
  );

  return (
    <Navbar
      className={`mx-auto    shadow-none items-center max-w-full  z-50 top-0  backdrop-blur-none 
    
      border-t-0  border-r-0

       border-l-0

        bg-opacity-100

       ${scrollHeight ? " fixed bg-[#14100c]" : "absolute bg-[#00000098]"}

     border-b  border-[#ffffff1a]
     transition-all duration-200
    backdrop-saturate-100 rounded-none   py-2 px-4 lg:px-8 lg:py-4`}
    >
      <div
        className={`container mx-auto  xl:first-letter:px-[8rem]  
      
      
      ${scrollHeight ? "min-h-[50px]  " : "min-h-[70px]"}
       flex items-center justify-between `}
      >
        <Link href={`/`} className="block font-semibold">
          HairCuts Express
        </Link>

        <div className="hidden lg:block">{navList}</div>

        <IconButton
          variant="text"
          className="ml-auto h-6 w-6  text-white text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
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
      <MobileNav open={openNav}>
        <div className="container mx-auto">
          {navList}
         
        </div>
      </MobileNav>
    </Navbar>
  );
}
