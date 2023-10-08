import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";

export function TabsNav() {
  const [activeTab, setActiveTab] = React.useState("Services");
  const data = [
    {
      label: "Services",
      value: "Services",
      desc: (
        <>
          <ul className=" flex flex-col space-y-6">
            <li>Supercut</li>
            <li>Supercut With Shampoo</li>
            <li>Supercut Jr.</li>
            <li>Supercut Sr</li>
            <li>Beard</li>
            <li>** See your stylist for exact pricing</li>
          </ul>
        </>
      ),
    },
    {
      label: "Gift Cards",
      value: "Gift Cards",
      desc: (
        <>
          <div>
            <p>
              Add personal audio and photo, send instantly online through email
              or schedule delivery for a future date. Redeemable at
              participating U.S. and Puerto Rico salons only.
            </p>
            <Button size="md" className="my-8 text-white font-bold">
              Order Gift card
            </Button>
            <p>Learn more about digital gift cards</p>
          </div>
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
