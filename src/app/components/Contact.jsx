import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import contact_img_1 from "../img/contact_img_1.jpg"
import contact_img_2 from "../img/contact_img_2.jpg"
import contact_img_3 from "../img/contact_img_3.jpg"



function Contact() {
  return (
    <section>
        <div className='bg-white w-full py-20'>
            <div className=''>
            {/* content 1 start here */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-0">
              <div className="flex justify-center">
                <Image
                  src={contact_img_1}
                  alt="service_img"
                  height={900}
                  width={900}
                  className=""
                />
              </div>
              <div className="lg:py-10 flex flex-col justify-center items-center">
                <h3 className="py-2 uppercase font-semibold text-3xl border-y-4 border-black md:text-4xl ">
                A BUSTLING ARTIST COLLECTIVE
                </h3>
                <p className="text-[#8a8787] text-sm md:text-lg text-center py-3 lg:px-10 ">
                  Looking for a great haircut in Queens NY, but not sure exactly
                  what you want? We will listen to your ideas and come up with a
                  solution for your hair that you will feel proud off!
                  Confidence is what keeps our clients coming back.
                </p>
              </div>
            </div>
            {/* content 2 start here */}
            <div className="grid grid-cols-1 lg:grid-cols-2 pt-10 lg:pt-0 gap-10 lg:gap-0">
              <div className="flex justify-center">
                <Image
                  src={contact_img_2}
                  alt="service_img"
                  height={900}
                  width={900}
                  className=""
                />
              </div>
              <div className="lg:py-10  flex flex-col justify-center items-center">
                <h3 className="uppercase border-b-4 border-black font-semibold text-3xl md:text-4xl text-center">
                  A BUSTLING ARTIST COLLECTIVE
                </h3>
                
                <p className="text-[#8a8787] text-sm md:text-lg text-center py-3 lg:px-10 ">
                  Looking for a great haircut in Queens NY, but not sure exactly
                  what you want? We will listen to your ideas and come up with a
                  solution for your hair that you will feel proud off!
                  Confidence is what keeps our clients coming back. ..
                </p>
              </div>
            </div>
            {/* content 3 start here */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-0">
              <div className="flex justify-center">
                <Image
                  src={contact_img_3}
                  alt="service_img"
                  height={900}
                  width={900}
                  className=""
                />
              </div>
              <div className="lg:py-10 flex flex-col  items-center">
           
                   <h3 className='text-4xl font-semibold'>HOURS</h3>
                   <ul className='space-y-2 py-2'>
                    <li className='uppercase text-2xl text-[#231F20]'>monday to sunday</li>
                    <li className='uppercase text-2xl text-[#231F20]'>11:00 am - 08:00 pm</li>
                   </ul>
                   <h3 className='text-4xl font-semibold'>CALL OR TEXT</h3>
                   <ul className='space-y-2 py-2'>
                    <li className='uppercase text-2xl text-[#231F20]'>212-837-2774</li>
                   </ul>
                   <h3 className='text-4xl font-semibold'>EMAIL</h3>
                   <ul className='space-y-2 py-2'>
                    <li className='uppercase text-2xl text-[#231F20]'>info@example.com</li>
                   </ul>
                   <p>hello world</p>
              </div>
            </div>
                
            </div>

        </div>
    </section>
  )
}

export default Contact