"use client";
import React, { useState } from "react";
import { Button, Spinner } from "@material-tailwind/react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const notify = () =>
  toast.success("Thanks For Contact With Us!", {
    position: "bottom-right",
  });

import {
  MapPinIcon,
  PhoneArrowDownLeftIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";

const init = {
  name: "",
  email: "",
  phoneNumber: "",
  serviceName: "",
  Message: "",
};

function Contactpage() {
  const [contact, setContact] = useState(init);
  const [isLoading, setIsLoading] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      // Make a POST request using Axios
      const response = await axios.post(
        `${process.env.API_URL}/api/contact`,
        contact
      );

      if (response.data.ok) {
        setIsLoading(false);
        notify();
        setContact(init);
        return;
      } else {
        setIsLoading(false);
      }
    } catch (error) {
      // Handle errors that occurred during the request
      console.error("Error making POST request:", error);

      // You can throw the error to propagate it up the call stack
      throw error;
    }
    // Update the 'date' state, triggering a re-fetch of the data
  };

  return (
    <section>
      <Toaster />
      <div className="about_bg_img w-full py-40 ">
        <div className="container mx-auto px-4">
          <div className="text-white ">
            <p className="uppercase font-semibold  text-center font-co text-lg lg:text-xl">
              Contact
            </p>
            <h2 className="text-4xl font-co md:text-6xl text-center font-bold py-2  lg:py-4 tracking-[1px]">
              Contact With Us
            </h2>
          </div>
        </div>
      </div>
      {/* ============================= */}
      <section className=" bg-white w-full py-20 mt-5">
        <div className="  grid grid-cols-1 lg:grid-cols-3 gap-10 container mx-auto">
          <div className="left">
            <div className="outContactInfo p-8  bg-[#F9F3F0]">
              <h1 className="   text-xl  text-black  font-semibold   border-[#C28565]">
                Our Contact Information
              </h1>
              <p className="my-3 text-sm text-[#6e6e6e]">
                Have a inquiry or some feedback for us? Fill out the form below
                to contact our team.
              </p>
              {/* ========Contact Card======= */}
              <div className="mt-4 space-y-6">
                <div className=" bg-white p-8 shadow-sm  space-x-5 flex  items-center ">
                  <MapPinIcon className="h-6 w-6 text-gray-500" />

                  <div>
                    <h4>Our Address</h4>
                    <p>3330 Hillsside Ave, New Hide Park, NY 11040</p>
                  </div>
                </div>
                <div className=" bg-white p-8 shadow-sm  space-x-5 flex  items-center ">
                  <PhoneArrowDownLeftIcon className="h-6 w-6 text-gray-500" />

                  <div>
                    <h4>Phone Number </h4>
                    <p>516.490.1330</p>
                    <h4>Email: services@haircutexpressllc.com </h4>
                  </div>
                </div>
                <div className=" bg-white p-8 shadow-sm  space-x-5 flex  items-center ">
                  <ClockIcon className="h-10 w-10 text-gray-500" />

                  <div>
                    <h4>Hours of Operation</h4>
                    <p>
                      Monday - Friday: 9AM - 8PM Sunday - Saturday: 10AM - 6PM
                    </p>
                  </div>
                </div>
              </div>
              {/* ============== */}
            </div>
          </div>
          <div className="right   lg:col-span-2 overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.38854235153!2d-73.66090922355048!3d40.7534782713875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c28806b73d5ebb%3A0xb96b55c0132e6479!2s3330%20Hillside%20Ave.%2C%20New%20Hyde%20Park%2C%20NY%2011040%2C%20USA!5e0!3m2!1sen!2sbd!4v1698777458603!5m2!1sen!2sbd"
              className="w-full   grayscale fill-teal-50 h-full min-h-[35rem]"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* =====Get In Touhc ====== */}

        <div className=" mt-[4rem] mb-6 custom__shadow px-[3rem] py-[4rem]  container mx-auto">
          <div>
            <h1 className="  text-4xl  text-center">Get In Touch</h1>

            <div>
              <form className="mt-5" onSubmit={handleSubmit}>
                <div className="w-full overflow-hidden grid md:space-x-8 md:space-y-0 space-y-5 grid-cols-1  md:grid-cols-2">
                  <input
                    value={contact.name}
                    onChange={(e) =>
                      setContact({ ...contact, name: e.target.value })
                    }
                    disabled={isLoading}
                    required
                    placeholder="Your name"
                    type="text"
                    className=" focus-within:outline-none placeholder:font-normal    w-full  font-normal   p-3 bg-[#F9F3F0]"
                  />

                  <input
                    value={contact.email}
                    onChange={(e) =>
                      setContact({ ...contact, email: e.target.value })
                    }
                    disabled={isLoading}
                    required
                    placeholder="Email Address"
                    type="email"
                    className=" focus-within:outline-none placeholder:font-normal   w-full  font-normal   p-3 bg-[#F9F3F0]"
                  />
                </div>

                <div className="w-full mt-5 overflow-hidden grid md:space-x-8 md:space-y-0 space-y-5 grid-cols-1  md:grid-cols-2">
                  <input
                    value={contact.phoneNumber}
                    onChange={(e) =>
                      setContact({ ...contact, phoneNumber: e.target.value })
                    }
                    disabled={isLoading}
                    required
                    placeholder="Phone Number"
                    type="number"
                    className=" focus-within:outline-none placeholder:font-normal    w-full  font-normal   p-3 bg-[#F9F3F0]"
                  />
                  <select
                    value={contact.serviceName}
                    onChange={(e) =>
                      setContact({ ...contact, serviceName: e.target.value })
                    }
                    disabled={isLoading}
                    required
                    className="bg-[#F9F3F0] p-3 focus-within:outline-none text-[#6e6e6e]"
                  >
                    <option>hairecutt</option>
                    <option>hairecutt</option>
                    <option>hairecutt</option>
                  </select>
                </div>

                <textarea
                  value={contact.Message}
                  onChange={(e) =>
                    setContact({ ...contact, Message: e.target.value })
                  }
                  disabled={isLoading}
                  required
                  placeholder="Write message..."
                  className="w-full focus-within:outline-none  p-5  mt-5 bg-[#F9F3F0]"
                  rows={6}
                />
                <button
                  type="submit"
                  className="bg-[#C28565] flex justify-center text-white  mt-4 p-5  w-full uppercase"
                >
                  {isLoading ? (
                    "sending..."
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
        {/* =====Get In Touhc ====== */}
      </section>

      {/* ================================ */}
    </section>
  );
}

export default Contactpage;
