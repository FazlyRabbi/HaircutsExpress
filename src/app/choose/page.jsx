"use client";
import React from "react";
import Header from "../components/Header";
import { TabsNav } from "../components/TabsNav";
import { Button } from "@material-tailwind/react";
import Footer from "../components/Footer";


function page() {
  return (
    <section className="bg-[#F5EEE7] h-full">
      <Header className=" shadow-md" />
      <div className=" container mx-auto py-8">
        <div className=" md:grid-cols-2 gap-x-10 grid grid-cols-1">
          <div className="mt-5">
            <TabsNav />
          </div>
          <div className="mt-5">
            <h1 className=" border-b  border-gray-900  mb-4  font-semibold text-2xl text-gray-900">
              Chect-In
            </h1>
            <div>
              <div className="  font-semibold p-2 max-w-2xl bg-black text-white">
                Haircut
              </div>

              <ul className="mt-5">
                <li className=" mb-8 flex cursor-pointer space-x-5 items-center">
                  <Button
                    size="sm"
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
                    className=" hover:bg-black hover:text-white  outline-4  font-semibold"
                    variant="outlined"
                  >
                    Add
                  </Button>
                  <p className=" text-gray-800 font-semibold">Supercut Jr.</p>
                </li>
                <li className=" mb-8 flex cursor-pointer space-x-5 items-center">
                  <Button
                    size="sm"
                    className=" hover:bg-black hover:text-white  outline-4  font-semibold"
                    variant="outlined"
                  >
                    Add
                  </Button>
                  <p className=" text-gray-800 font-semibold">Supercut Sr.</p>
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
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default page;
