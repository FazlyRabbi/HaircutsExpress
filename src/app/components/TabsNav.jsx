"use client";
import React, { useEffect, useState } from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import useStore from "../store/store";

export function TabsNav() {
  const { service, fetchService } = useStore();

  const [activeTab, setActiveTab] = useState("Services");

  useEffect(() => {
    fetchService();
  }, []);

  console.log(service.length);
  const data = [
    {
      label: "Services",
      value: "Services",
      desc: (
        <>
          <ul className=" flex flex-col space-y-6">
            {service?.map((name) => 
              <li key={name.id}>{name?.name}</li>
            )}
          </ul>
        </>
      ),
    },
  ];
  return (
    <Tabs value={activeTab}>
      <TabsHeader
        className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
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
            className={activeTab === value ? "text-gray-900" : ""}
          >
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {data.map(({ value, desc }) => (
          <TabPanel key={value} value={value}>
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}
