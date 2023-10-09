"use client";
import React, { useState } from "react";
import { TabsNav } from "../TabsNav";
import { Button, Input, Checkbox } from "@material-tailwind/react";

function Choose() {
  const [next, setNext] = useState(false);

  const handleNext = () => {
    setNext(true);
  };
  const handlePrev = () => {
    setNext(false);
  };

  return (
    <section className="bg-[#F5EEE7] h-full py-5">
      <div className="about_bg_img w-full py-40 ">
        <div className="container mx-auto px-4">
          <div className="text-white text-center">
            <h2 className="text-4xl md:text-6xl font-bold py-2  lg:py-4 tracking-[1px]">
              Check In
            </h2>
          </div>
        </div>
      </div>

      {/* daynamic content  */}

      <div className=" container mx-auto py-8">
        <div className=" md:grid-cols-2 gap-x-10 grid grid-cols-1">
          <div className="mt-5">
            <TabsNav />
          </div>
          <div className="mt-5">
            <h1 className=" border-b  border-gray-900  mb-4  font-semibold text-2xl text-gray-900">
              Chect-In
            </h1>

            {/* dynamic content */}

            {!next ? (
              <div>
                <div>
                  <div className="  font-semibold p-2 max-w-2xl bg-black text-white">
                    Haircut
                  </div>

                  <ul className="mt-5">
                    <li className=" mb-8 flex cursor-pointer space-x-5 items-center">
                      <Button
                        size="sm"
                        onClick={() => handleNext()}
                        className=" hover:bg-black hover:text-white  outline-4  font-semibold"
                        variant="outlined"
                      >
                        Add
                      </Button>
                      <p className=" text-gray-800 font-semibold">Supercut</p>
                    </li>
                    <li className=" mb-8 flex cursor-pointer space-x-5 items-center">
                      <Button
                        size="sm"
                        onClick={() => handleNext()}
                        className=" hover:bg-black hover:text-white  outline-4  font-semibold"
                        variant="outlined"
                      >
                        Add
                      </Button>
                      <p className=" text-gray-800 font-semibold">
                        Supercut With Shampoo
                      </p>
                    </li>
                    <li className=" mb-8 flex cursor-pointer space-x-5 items-center">
                      <Button
                        size="sm"
                        onClick={() => handleNext()}
                        className=" hover:bg-black hover:text-white  outline-4  font-semibold"
                        variant="outlined"
                      >
                        Add
                      </Button>
                      <p className=" text-gray-800 font-semibold">
                        Supercut Jr.
                      </p>
                    </li>
                    <li className=" mb-8 flex cursor-pointer space-x-5 items-center">
                      <Button
                        size="sm"
                        onClick={() => handleNext()}
                        className=" hover:bg-black hover:text-white  outline-4  font-semibold"
                        variant="outlined"
                      >
                        Add
                      </Button>
                      <p className=" text-gray-800 font-semibold">
                        Supercut Sr.
                      </p>
                    </li>
                  </ul>
                </div>
                <div>
                  <div className="  font-semibold p-2 max-w-2xl bg-black text-white">
                    Beard Trim
                  </div>

                  <ul className="mt-5">
                    <li className=" mb-8 flex cursor-pointer space-x-5 items-center">
                      <Button
                        size="sm"
                        onClick={() => handleNext()}
                        className=" hover:bg-black hover:text-white  outline-4  font-semibold"
                        variant="outlined"
                      >
                        Beard
                      </Button>
                      <p className=" text-gray-800 font-semibold">Supercut</p>
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              <div>
                <h1 className="  font-semibold text-2xl">Servies</h1>
                <p className="my-5">Supercut Jr</p>
                <Button
                  size="sm"
                  onClick={() => handlePrev()}
                  className=" hover:bg-black hover:text-white  outline-[8px]  font-semibold"
                  variant="outlined"
                >
                  Add another service
                </Button>

                <div className="mt-5">
                  <h1 className="  text-xl font-semibold">Date</h1>
                  <div className=" flex  space-x-4">
                    <div className="bg-[#14100c] max-w-[4rem]  cursor-pointer w-full mt-2 text-center rounded-md  p-2  bg-flex flex-col justify-center font-semibold text-white ">
                      <p>Mon</p>
                      <p>9</p>
                    </div>

                    <div className="bg-[#14100c] max-w-[4rem] cursor-pointer w-full  mt-2 text-center rounded-md  p-2  bg-flex flex-col justify-center font-semibold text-white ">
                      <p>Mon</p>
                      <p>9</p>
                    </div>
                  </div>
                </div>

                <div className="mt-5">
                  <h1 className="  text-xl font-semibold">
                    Estimated Check-In Time
                  </h1>
                  <div className="  grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2 ">
                    <div
                      className="  border-2  border-[#14100c] py-1 
                    
                     hover:text-white  hover:bg-[#14100c]
                    cursor-pointer  mt-2 text-center rounded-md   px-[2rem]  bg-flex flex-col justify-center font-semibold text-[#14100c] "
                    >
                      <p>11:40am</p>
                    </div>
                    <div
                      className="  border-2  border-[#14100c] py-1 
                    
                     hover:text-white  hover:bg-[#14100c]
                    cursor-pointer  mt-2 text-center rounded-md   px-[2rem]     font-semibold text-[#14100c] "
                    >
                      <p>11:40am</p>
                    </div>
                    <div
                      className="  border-2  border-[#14100c] py-1 
                    
                     hover:text-white  hover:bg-[#14100c]
                    cursor-pointer  mt-2 text-center rounded-md   px-[2rem]  bg-flex flex-col justify-center font-semibold text-[#14100c] "
                    >
                      <p>11:40am</p>
                    </div>
                    <div
                      className="  border-2  border-[#14100c] py-1 
                    
                     hover:text-white  hover:bg-[#14100c]
                    cursor-pointer  mt-2 text-center rounded-md   px-[2rem]  bg-flex flex-col justify-center font-semibold text-[#14100c] "
                    >
                      <p>11:40am</p>
                    </div>
                    <div
                      className="  border-2  border-[#14100c] py-1 
                    
                     hover:text-white  hover:bg-[#14100c]
                    cursor-pointer  mt-2 text-center rounded-md   px-[2rem]  bg-flex flex-col justify-center font-semibold text-[#14100c] "
                    >
                      <p>11:40am</p>
                    </div>
                    <div
                      className="  border-2  border-[#14100c] py-1 
                    
                     hover:text-white  hover:bg-[#14100c]
                    cursor-pointer  mt-2 text-center rounded-md   px-[2rem]  bg-flex flex-col justify-center font-semibold text-[#14100c] "
                    >
                      <p>11:40am</p>
                    </div>
                    <div
                      className="  border-2  border-[#14100c] py-1 
                    
                     hover:text-white  hover:bg-[#14100c]
                    cursor-pointer  mt-2 text-center rounded-md   px-[2rem]  bg-flex flex-col justify-center font-semibold text-[#14100c] "
                    >
                      <p>11:40am</p>
                    </div>
                    <div
                      className="  border-2  border-[#14100c] py-1 
                    
                     hover:text-white  hover:bg-[#14100c]
                    cursor-pointer  mt-2 text-center rounded-md   px-[2rem]  bg-flex flex-col justify-center font-semibold text-[#14100c] "
                    >
                      <p>11:40am</p>
                    </div>
                    <div
                      className="  border-2  border-[#14100c] py-1 
                    
                     hover:text-white  hover:bg-[#14100c]
                    cursor-pointer  mt-2 text-center rounded-md   px-[2rem]  bg-flex flex-col justify-center font-semibold text-[#14100c] "
                    >
                      <p>11:40am</p>
                    </div>
                    <div
                      className="  border-2  border-[#14100c] py-1 
                    
                     hover:text-white  hover:bg-[#14100c]
                    cursor-pointer  mt-2 text-center rounded-md   px-[2rem]  bg-flex flex-col justify-center font-semibold text-[#14100c] "
                    >
                      <p>11:40am</p>
                    </div>
                    <div
                      className="  border-2  border-[#14100c] py-1 
                    
                     hover:text-white  hover:bg-[#14100c]
                    cursor-pointer  mt-2 text-center rounded-md   px-[2rem]  bg-flex flex-col justify-center font-semibold text-[#14100c] "
                    >
                      <p>11:40am</p>
                    </div>
                    <div
                      className="  border-2  border-[#14100c] py-1 
                    
                     hover:text-white  hover:bg-[#14100c]
                    cursor-pointer  mt-2 text-center rounded-md   px-[2rem]  bg-flex flex-col justify-center font-semibold text-[#14100c] "
                    >
                      <p>11:40am</p>
                    </div>
                    <div
                      className="  border-2  border-[#14100c] py-1 
                    
                     hover:text-white  hover:bg-[#14100c]
                    cursor-pointer  mt-2 text-center rounded-md   px-[2rem]  bg-flex flex-col justify-center font-semibold text-[#14100c] "
                    >
                      <p>11:40am</p>
                    </div>
                    <div
                      className="  border-2  border-[#14100c] py-1 
                    
                     hover:text-white  hover:bg-[#14100c]
                    cursor-pointer  mt-2 text-center rounded-md   px-[2rem]  bg-flex flex-col justify-center font-semibold text-[#14100c] "
                    >
                      <p>11:40am</p>
                    </div>
                    <div
                      className="  border-2  border-[#14100c] py-1 
                    
                     hover:text-white  hover:bg-[#14100c]
                    cursor-pointer  mt-2 text-center rounded-md   px-[2rem]  bg-flex flex-col justify-center font-semibold text-[#14100c] "
                    >
                      <p>11:40am</p>
                    </div>
                  </div>
                </div>

                {/* Guests */}
                <div className=" mt-5">
                  <h1 className="  text-xl font-semibold my-4">Guests</h1>
                  <h1 className="mb-5">All Fields are requared</h1>
                  <div>
                    <div className="mb-4">
                      <Input
                        variant="standard"
                        label="First Name"
                        className=" text-[#14100c] font-semibold placeholder:text-[14100c]"
                      />
                    </div>
                    <div className="mb-4">
                      <Input
                        variant="standard"
                        label="Last Name"
                        className=" text-[#14100c] font-semibold placeholder:text-[14100c]"
                      />
                    </div>
                    <div className="mb-4">
                      <Input
                        variant="standard"
                        type="number"
                        label="Phone Number"
                        className=" text-[#14100c] font-semibold placeholder:text-[14100c]"
                      />
                    </div>
                    <div className="mb-4">
                      <Input
                        variant="standard"
                        type="email"
                        label="Email"
                        className=" text-[#14100c] font-semibold placeholder:text-[14100c]"
                      />
                    </div>
                  </div>
                  <Checkbox
                    label="Remember Me"
                    ripple={false}
                    className="my-6"
                  />
                  <Checkbox
                    label=" here the text"
                    ripple={false}
                    className="my-6"
                  />
                  <Checkbox
                    label="here the text"
                    ripple={false}
                    className="my-6"
                  />
                </div>

                <Button
                  size="lg"
                  className=" hover:bg-black uppercase w-full font-bold hover:text-white   "
                  variant="solid"
                >
                  Check-in
                </Button>
              </div>
            )}

            {/* dynamic content */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Choose;
