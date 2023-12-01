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

  const [activeTab, setActiveTab] = useState("Services");

  useEffect(() => {
    fetchService();
  }, []);

  const data = [
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
    {
      label: "Location",
      value: "Location",
      desc: (
        <>
          <div>
            <div className="  hover:border-2 h-[20rem] w-[90%] overflow-hidden   border-gray-800">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14501.147649838857!2d89.52790971176837!3d24.6826619987298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fdb06e613b8601%3A0x277b6269e151f5dd!2sDhunat%20Pouroshobha!5e0!3m2!1sen!2sbd!4v1701440234953!5m2!1sen!2sbd"
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

                <span>(501) 794-6770</span>
              </div>

              <div className="mt-[1rem] flex   space-x-4">
                <ClockIcon className="h-7 w-7  text-black" />

                <div className=" space-y-2">
                  <div className="flex space-x-8 ">
                    <div>Mon</div>
                    <div>9:00 AM - 7:00 PM</div>
                  </div>

                  <div className="flex space-x-8 ">
                    <div>Tue</div>
                    <div>9:00 AM - 7:00 PM</div>
                  </div>
                  <div className="flex space-x-8 ">
                    <div>Wed</div>
                    <div>9:00 AM - 7:00 PM</div>
                  </div>
                  <div className="flex space-x-8 ">
                    <div>Thu</div>
                    <div>9:00 AM - 7:00 PM</div>
                  </div>
                  <div className="flex space-x-8 ">
                    <div>Fri</div>
                    <div>9:00 AM - 7:00 PM</div>
                  </div>
                  <div className="flex space-x-8 ">
                    <div>Sat</div>
                    <div>9:00 AM - 7:00 PM</div>
                  </div>
                  <div className="flex space-x-8 ">
                    <div>Sun</div>
                    <div>CLOSED</div>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h1 className="mb-5 font-bold text-lg">About This Salon</h1>

                <p className=" text-justify">
                  Supercuts has a conveniently located hair salon at 81611 20770
                  I-30 NORTH STE 125 in BENTON, AR. We offer a variety of
                  services from consistent, quality hair cuts to color services
                  – all at an affordable price. At Supercuts, our stylists are
                  some of the best trained in the business. They will listen to
                  you and can recommend the haircut and professional hair care
                  products to help keep your style looking fresh. Both men and
                  women needing haircuts in BENTON, AR will feel welcome at
                  Supercuts.
                </p>
              </div>
            </div>
          </div>
        </>
      ),
    },
  ];

  return (
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
  );
}
