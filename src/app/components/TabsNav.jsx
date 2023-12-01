"use client";

import React, { useEffect, useState } from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { PhoneArrowUpRightIcon, ClockIcon } from "@heroicons/react/24/outline";

import useStore from "../store/store";

export function TabsNav() {
  const { service, fetchService } = useStore();

  const [activeTab, setActiveTab] = useState("Salon");

  useEffect(() => {
    fetchService();
  }, []);

  const data = [
    {
      label: "Salon",
      value: "Salon",
      desc: (
        <>
          <div>
            <div className="  hover:border-2 h-[20rem] w-[90%] overflow-hidden   border-gray-800">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.38854235153!2d-73.66090922355048!3d40.7534782713875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c28806b73d5ebb%3A0xe55494b0302e47a2!2s3330%20Hillside%20Ave.%20%233330%2C%20New%20Hyde%20Park%2C%20NY%2011040%2C%20USA!5e0!3m2!1sen!2sbd!4v1701452202469!5m2!1sen!2sbd"
                className=" h-full w-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div>
              <div className=" flex space-x-4  mt-[2rem]">
                <PhoneArrowUpRightIcon className="h-6 w-6  text-black" />

                <span>(501) 516-490-1330</span>
              </div>

              <div className="mt-[1rem] flex   space-x-4">
                <ClockIcon className="h-7 w-7  text-black" />

                <div className=" space-y-2">
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

              {/* <div className="mt-10">
                <h1 className="mb-5 font-bold text-lg">About This Salon</h1>

                <p className=" text-justify">
                  Supercuts has a conveniently located hair salon at 81611 20770
                  I-30 NORTH STE 125 in BENTON, AR. We offer a variety of
                  services from consistent, quality hair cuts to color services
                  – all at an affordable pprice. At Supercuts, our stylists are
                  some of the best trained in the business. They will listen to
                  you and can recommend the haircut and professional hair care
                  products to help keep your style looking fresh. Both men and
                  women needing haircuts in BENTON, AR will feel welcome at
                  Supercuts.
                </p>
              </div> */}
            </div>
          </div>
        </>
      ),
    },
    {
      label: "Services",
      value: "Services",
      desc: (
        <>
          <ul className=" flex flex-col space-y-6">
            {service?.map((name) => (
              <li key={name.id} className=" ">
                {name?.name}
              </li>
            ))}
          </ul>
        </>
      ),
    },
  ];

  return (
    <div>
      <div className=" bg-[#3E8CBA] p-6 mb-5 text-white  border-l-[.6rem] border-[#78AFCF]">
        <h1 className="font-bold text-xl">3330 Hillsside Ave</h1>
        <p>3330 Hillsside Ave, New Hide Park, NY 11040</p>
      </div>
      <Tabs value={activeTab}>
        <TabsHeader
          className="rounded-none border-b     bg-transparent  text-white border-blue-gray-50  p-0"
          indicatorProps={{
            className:
              "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",
          }}
        >
          {data.map(({ label, value }) => (
            <Tab
              key={value}
              value={value}
              onClick={() => setActiveTab(value)}
              className={
                activeTab === value ? "text-gray-900 font-bold " : "font-bold"
              }
            >
              {label}
            </Tab>
          ))}
        </TabsHeader>

        <TabsBody>
          {data.map(({ value, desc }) => (
            <TabPanel className=" " key={value} value={value}>
              {desc}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </div>
  );
}
