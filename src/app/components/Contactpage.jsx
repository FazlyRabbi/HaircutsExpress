import React from "react";
import Link from "next/link";
import { BsFillTelephoneForwardFill, BsArrowRight } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import { LuMail } from "react-icons/lu";

function Contactpage() {
  return (
    <section>
      <div className="about_bg_img w-full py-40 ">
        <div className="container mx-auto px-4">
          <div className="text-white text-center">
            <p className="uppercase font-semibold text-lg lg:text-xl">
              Contact
            </p>
            <h2 className="text-4xl md:text-6xl font-bold py-2  lg:py-4 tracking-[1px]">
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
                  <div>icon</div>
                  <div>
                    <h4>Our Address</h4>
                    <p>2690 Hiltona Street Victoria Road New York, Canada</p>
                  </div>
                </div>
                <div className=" bg-white p-8 shadow-sm  space-x-5 flex  items-center ">
                  <div>icon</div>
                  <div>
                    <h4>Our Address</h4>
                    <p>2690 Hiltona Street Victoria Road New York, Canada</p>
                  </div>
                </div>
                <div className=" bg-white p-8 shadow-sm  space-x-5 flex  items-center ">
                  <div>icon</div>
                  <div>
                    <h4>Our Address</h4>
                    <p>2690 Hiltona Street Victoria Road New York, Canada</p>
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
            <h1 className="  text-4xl  text-center">
              Get In Touch
            </h1>

            <div>
              <form className="mt-5">
                <div className="w-full overflow-hidden grid md:space-x-8 md:space-y-0 space-y-5 grid-cols-1  md:grid-cols-2">
                  <input
                    placeholder="Your name"
                    type="text"
                    className=" focus-within:outline-none placeholder:font-normal    w-full  font-normal   p-3 bg-[#F9F3F0]"
                  />
                  <input
                    placeholder="Email Address"
                    type="text"
                    className=" focus-within:outline-none placeholder:font-normal   w-full  font-normal   p-3 bg-[#F9F3F0]"
                  />
                </div>

                <div className="w-full mt-5 overflow-hidden grid md:space-x-8 md:space-y-0 space-y-5 grid-cols-1  md:grid-cols-2">
                  <input
                    placeholder="Phone Number"
                    type="text"
                    className=" focus-within:outline-none placeholder:font-normal    w-full  font-normal   p-3 bg-[#F9F3F0]"
                  />
                  <select className="bg-[#F9F3F0] p-3 focus-within:outline-none text-[#6e6e6e]">
                    <option>hairecutt</option>
                    <option>hairecutt</option>
                    <option>hairecutt</option>
                  </select>
                </div>

                <textarea
                  placeholder="Write message..."
                  className="w-full focus-within:outline-none  p-5  mt-5 bg-[#F9F3F0]"
                  rows={6}
                />
                <button className="bg-[#C28565]   mt-4 p-5 text-white w-full uppercase">
                    send message
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
