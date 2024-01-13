import React from "react";
import Link from "next/link";
import Image from "next/image";
import { IoLogoWhatsapp } from "react-icons/io";
import product_img_1 from "../../img/Products/product_1.jpg";
import product_img_2 from "../../img/Products/product_2.jpg";
import product_img_3 from "../../img/Products/product_3.jpg";
import product_img_4 from "../../img/Products/product_4.jpg";
import product_img_5 from "../../img/Products/product_5.jpg";
import product_img_6 from "../../img/Products/product_6.jpg";
import product_img_7 from "../../img/Products/product_7.jpg";
import calltoaction from "../../img/Products/call-to-action.svg";
import profile from "../../img/Products/profile.webp";

function Product() {
  return (
    <section>
      <div className="about_bg_img  py-32 lg:py-40 lg:pt-48 w-full">
        <div className="container mx-auto px-4">
          <h1 className=" text-white text-7xl md:text-8xl lg:text-9xl text-center font-semibold">
            Our <span className=" font-thin text-white">Products</span>
          </h1>
        </div>
      </div>
      {/* ======================== */}
      <div className=" bg-[#F5EEE7] w-full py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="pt-20 grid gap-10 lg:grid-cols-2 lg:items-start">
            {/* grid first image  */}
            <Link
              href={"#"}
              className="flex flex-col gap-5 bg-white rounded-3xl shadow-md overflow-hidden"
            >
              <div className="overflow-hidden bg-cover relative ">
                <Image
                  src={product_img_1}
                  alt="project_image"
                  className="w-full bg-cover bg-no-repeat hover:scale-110 transition-all duration-300 ease-in-out "
                />
              </div>
              <div className="space-y-2 p-4 pb-5">
                <div className="flex flex-col gap-3 ">
                  <h5 className="text-[#6d6c6c] font-semibold text-2xl">
                    Gently cleanses, improves manageability, adds deep shine and
                    enhances hair appearance.
                  </h5>
                  <div className="flex py-4">
                    <h4 className=" text-lg border border-[#a5a5a5]  rounded-full px-3 text-[#E2AE10]">
                      Shampoo
                    </h4>
                  </div>
                </div>
              </div>
            </Link>
            {/* grid second image  */}
            <Link
              href={"#"}
              className="flex flex-col gap-5 bg-white rounded-3xl shadow-md overflow-hidden"
            >
              <div className="overflow-hidden bg-cover relative ">
                <Image
                  src={product_img_2}
                  alt="project_image"
                  className="w-full bg-cover bg-no-repeat hover:scale-110 transition-all duration-300 ease-in-out "
                />
              </div>
              <div className="space-y-2 p-4 pb-5">
                <div className="flex flex-col gap-3 ">
                  <h5 className="text-[#6d6c6c] font-semibold text-2xl">
                    Kenra Moisturizing Shampoo and conditioner improves
                    manageability over 50%, while increasing softness and shine.
                  </h5>
                  <div className="flex py-4">
                    <h4 className=" text-lg border border-[#a5a5a5]  rounded-full px-3 text-[#E2AE10]">
                      Shampoo
                    </h4>
                  </div>
                </div>
              </div>
            </Link>
            {/* grid third image  */}
            <Link
              href={"#"}
              className="flex flex-col gap-5 bg-white rounded-3xl shadow-md overflow-hidden"
            >
              <div className="overflow-hidden bg-cover relative ">
                <Image
                  src={product_img_3}
                  alt="project_image"
                  className="w-full bg-cover bg-no-repeat hover:scale-110 transition-all duration-300 ease-in-out "
                />
              </div>
              <div className="space-y-2 p-4 pb-5">
                <div className="flex flex-col gap-3 ">
                  <h5 className="text-[#6d6c6c] font-semibold text-2xl">
                    A reparative, moisturizing shampoo for hair damaged by
                    chemical processing, color or heat styling.
                  </h5>
                  <div className="flex py-4">
                    <h4 className=" text-lg border border-[#a5a5a5]  rounded-full px-3 text-[#E2AE10]">
                      Shampoo
                    </h4>
                  </div>
                </div>
              </div>
            </Link>
            {/* grid fourth image  */}
            <Link
              href={"#"}
              className="flex flex-col gap-5 bg-white rounded-3xl shadow-md overflow-hidden"
            >
              <div className="overflow-hidden bg-cover relative ">
                <Image
                  src={product_img_4}
                  alt="project_image"
                  className="w-full bg-cover bg-no-repeat hover:scale-110 transition-all duration-300 ease-in-out "
                />
              </div>
              <div className="space-y-2 p-4 pb-5">
                <div className="flex flex-col gap-3 ">
                  <h5 className="text-[#6d6c6c] font-semibold text-2xl">
                    Infused with antioxidant-rich argan oil and reconstructive
                    keratin to help restore elasticity, moisture and shine.
                  </h5>
                  <div className="flex py-4">
                    <h4 className=" text-lg border border-[#a5a5a5]  rounded-full px-3 text-[#E2AE10]">
                      Shampoo
                    </h4>
                  </div>
                </div>
              </div>
            </Link>
            {/* grid five image  */}
            <Link
              href={"#"}
              className="flex flex-col gap-5 bg-white rounded-3xl shadow-md overflow-hidden"
            >
              <div className="overflow-hidden bg-cover relative ">
                <Image
                  src={product_img_5}
                  alt="project_image"
                  className="w-full h-[29rem] bg-cover bg-no-repeat hover:scale-110 transition-all duration-300 ease-in-out "
                />
              </div>
              <div className="space-y-2 p-4 pb-5">
                <div className="flex flex-col gap-3 ">
                  <h5 className="text-[#6d6c6c] font-semibold text-2xl">
                    Infused with antioxidant-rich argan oil and reconstructive
                    keratin to help restore elasticity, moisture and shine.
                  </h5>
                  <div className="flex py-4">
                    <h4 className=" text-lg border border-[#a5a5a5]  rounded-full px-3 text-[#E2AE10]">
                      Shampoo
                    </h4>
                  </div>
                </div>
              </div>
            </Link>
            {/* grid six image  */}
            <Link
              href={"#"}
              className="flex flex-col gap-5 bg-white rounded-3xl shadow-md overflow-hidden"
            >
              <div className="overflow-hidden bg-cover relative ">
                <Image
                  src={product_img_6}
                  alt="project_image"
                  className="w-full bg-cover bg-no-repeat hover:scale-110 transition-all duration-300 ease-in-out "
                />
              </div>
              <div className="space-y-2 p-4 pb-5">
                <div className="flex flex-col gap-3 ">
                  <h5 className="text-[#6d6c6c] font-semibold text-2xl">
                    Infused with antioxidant-rich argan oil and reconstructive
                    Crew to help restore elasticity, moisture and shine.
                  </h5>
                  <div className="flex py-4">
                    <h4 className=" text-lg border border-[#a5a5a5]  rounded-full px-3 text-[#E2AE10]">
                      Shampoo
                    </h4>
                  </div>
                </div>
              </div>
            </Link>
            {/* grid seven image  */}
            <Link
              href={"#"}
              className="flex flex-col gap-5 bg-white rounded-3xl shadow-md overflow-hidden"
            >
              <div className="overflow-hidden bg-cover relative ">
                <Image
                  src={product_img_7}
                  alt="project_image"
                  className="w-full bg-cover bg-no-repeat hover:scale-110 transition-all duration-300 ease-in-out "
                />
              </div>
              <div className="space-y-2 p-4 pb-5">
                <div className="flex flex-col gap-3 ">
                  <h5 className="text-[#6d6c6c] font-semibold text-2xl">
                    Infused with antioxidant-rich argan oil and reconstructive
                    keratin to help restore elasticity, moisture and shine.
                  </h5>
                  <div className="flex py-4">
                    <h4 className=" text-lg border border-[#a5a5a5]  rounded-full px-3 text-[#E2AE10]">
                      Shampoo
                    </h4>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      {/* =============== call to action ============ */}
      <div className="bg-white py-20 w-full">
        <div className="container mx-auto px-4">
          <div className=" grid gap-10 lg:grid-cols-3">
            <div className=" bg-[#F5EEE7] w-full py-10 rounded-3xl px-8 lg:col-span-2 shadow-md">
              <div className="grid gap-10 md:grid-cols-2">
                <div className="flex justify-center md:order-last">
                  <Image
                    src={calltoaction}
                    alt="call to action "
                    className="w-96"
                  />
                </div>
                <div className="space-y-1">
                  <h3 className=" text-[#E2AE10] font-semibold text-2xl md:text-3xl mb-[15px]">
                    Got a project in mind?
                  </h3>
                  <h1 className="text-3xl lg:text-6xl md:text-5xl  mb-[16px] font-bold  text-[#6d6c6c] md:leading-[55px]">
                    Let&rsquo;s discuss the details
                  </h1>
                  <div className="pt-8 md:pt-16">
                    <button className="font-semibold text-[#E2AE10] text-xl py-4 px-10 rounded-full bg-white hover:text-white hover:bg-primary transition-all duration-300">
                      Schdule a Call
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#F5EEE7] w-full py-10 rounded-3xl px-8 shadow-md">
              <div className="flex flex-col gap-5">
                <div>
                  <Image src={profile} alt="profile" className="w-28" />
                </div>
                <h3 className="text-[#6d6c6c] font-semibold text-xl md:text-3xl lg:text-2xl">
                  My name is Noman, Manager at haircut express. I will
                  answer all your questions.
                </h3>
                <div className="pt-5">
                  <button className="font-semibold hover:text-[#E2AE10] text-xl py-4 px-10 rounded-full hover:bg-white text-white bg-primary transition-all duration-300 flex items-center gap-3">
                    <p>Ask Question</p>
                    <IoLogoWhatsapp className="text-green-500 text-[1.6rem]" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Product;
