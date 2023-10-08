"use cleint";
import React from "react";
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

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center uppercase font-bold">
          About Us
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-normal "
      >
        <Link href="/service" className="flex items-center uppercase font-bold">
          Service
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-normal "
      >
        <Link href="/choose" className="flex items-center uppercase font-bold">
          Choose Our Pakages
        </Link>
      </Typography>
    </ul>
  );

  return (
    <div className=" bg-black">
      <Navbar className="mx-auto bg-black border-none outline-none    shadow-none  rounded-none py-2 px-4 lg:px-8 lg:py-4">
        <div className="container shan mx-auto flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer py-1.5  text-white font-medium"
          >
            <Link href={"/"} className=" font-bold">Haircuts Express</Link>
          </Typography>
          <div className="hidden lg:block">{navList}</div>
          <div className=" space-x-5">
            <Button
              size="sm"
              className="hidden    px-8 shadow-none bg-[#e2ae10]  rounded-none  lg:inline-block"
            >
              <span>Register</span>
            </Button>
            <Button
              size="sm"
              className="hidden   px-8 shadow-none  bg-[#e2ae10]  rounded-none lg:inline-block"
            >
              <span>Login</span>
            </Button>
          </div>

          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
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
            <Button
              size="sm"
              fullWidth
              className="mb-2 rounded-none bg-[#e2ae10]"
            >
              <span>Register</span>
            </Button>
            <Button
              size="sm"
              fullWidth
              className="mb-2 rounded-none bg-[#e2ae10]"
            >
              <span>Login</span>
            </Button>
          </div>
        </MobileNav>
      </Navbar>
    </div>
  );
}
