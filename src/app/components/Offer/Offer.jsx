import React from "react";
import Link from "next/link";
import Image from "next/image";
import offer_img_1 from "../../img/offer/p1.jpeg";
import offer_img_2 from "../../img/offer/p2.jpeg";
import offer_img_3 from "../../img/offer/p3.jpeg";
import offer_img_4 from "../../img/offer/p4.jpg";

function Offer() {
  return (
    <section>
      <div className="about_bg_img  py-32 lg:py-40 lg:pt-48 w-full">
        <div className="container mx-auto px-4">
          <h1 className=" text-white text-7xl md:text-8xl lg:text-9xl text-center font-semibold">
            Our <span className=" font-thin text-white">Offer</span>
          </h1>
        </div>
      </div>
      {/* ======================== */}
      <div className=" bg-[#F5EEE7] w-full py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="pt-20 grid gap-10 lg:grid-cols-2">
            {/* grid first image  */}
            <Link
              href={"#"}
              className="flex flex-col gap-5 bg-white rounded-3xl shadow-md overflow-hidden"
            >
              <div className="overflow-hidden bg-cover relative ">
                <Image
                  src={offer_img_1}
                  alt="project_image"
                  className="w-full bg-cover bg-no-repeat hover:scale-110 transition-all duration-300 ease-in-out "
                />
              </div>
              <div className="space-y-2 p-4 pb-5">
                <div className="flex flex-col gap-3 ">
                  <h5 className="text-[#6d6c6c] font-semibold text-2xl">
                    Haircut Specal Offer
                  </h5>
                  <div className="flex">
                    <h4 className=" text-xl hover:text-[#6d6c6c]  text-[#E2AE10]">
                      View Offer
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
                  src={offer_img_2}
                  alt="project_image"
                  className="w-full bg-cover bg-no-repeat hover:scale-110 transition-all duration-300 ease-in-out "
                />
              </div>
              <div className="space-y-2 p-4 pb-5">
                <div className="flex flex-col gap-3 ">
                  <h5 className="text-[#6d6c6c] font-semibold text-2xl">
                    Hair Color Specal Offer
                  </h5>
                  <div className="flex">
                    <h4 className=" text-xl hover:text-[#6d6c6c]  text-[#E2AE10]">
                      View Offer
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
                  src={offer_img_3}
                  alt="project_image"
                  className="w-full bg-cover bg-no-repeat hover:scale-110 transition-all duration-300 ease-in-out "
                />
              </div>
              <div className="space-y-2 p-4 pb-5">
                <div className="flex flex-col gap-3 ">
                  <h5 className="text-[#6d6c6c] font-semibold text-2xl">
                    Birthday Party Special Offer
                  </h5>
                  <div className="flex">
                    <h4 className=" text-xl hover:text-[#6d6c6c]  text-[#E2AE10]">
                      View Offer
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
                  src={offer_img_4}
                  alt="project_image"
                  className="w-full bg-cover bg-no-repeat hover:scale-110 transition-all duration-300 ease-in-out "
                />
              </div>
              <div className="space-y-2 p-4 pb-5">
                <div className="flex flex-col gap-3 ">
                  <h5 className="text-[#6d6c6c] font-semibold text-2xl">
                    Haircut Specal Offer
                  </h5>
                  <div className="flex">
                    <h4 className=" text-xl hover:text-[#6d6c6c]  text-[#E2AE10]">
                      View Offer
                    </h4>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Offer;
