import React from "react";
import Link from "next/link";
import Image from "next/image";
import work_img_1 from "../img/work_img_1.jpg";
import work_img_2 from "../img/work_img_2.jpg";
import work_img_3 from "../img/work_img_3.jpg";

function Work() {
  return (
    <section>
      <div className="bg-white w-full py-20">
        <div className="container mx-auto px-8 md:px-4 lg:px-20">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
            <div>
              <div className="flex justify-center lg:justify-start py-5">
                <Image
                  src={work_img_1}
                  alt="work_image"
                  height={200}
                  width={320}
                />
              </div>
              <Link
                href={"#"}
                className="hover:text-[#C59D5F] transition-all duration-200"
              >
                APRIL 4, 2018
              </Link>
              <h2 className="py-3 md:py-5 ">
                <Link
                  href={"#"}
                  className="hover:text-[#C59D5F] text-2xl font-semibold transition-all duration-200 uppercase"
                >
                  How to curl hair
                </Link>
              </h2>
              <p className="text-lg md:text-[1rem] leading-[30px]">
                Lorem ipsum dolor sit amet, consectetur adicing elit ut
                ullamcorper. leo, eget euismod orci. Cum sociis natoque penati
              </p>
              <div className="py-5">
                <Link
                  href={"#"}
                  className="text-[#C59D5F] text-xl border-b-2 pb-1 border-[#C59D5F] hover:border-[#7a7878]  transition-all duration-300 uppercase"
                >
                  read more
                </Link>
              </div>
            </div>
            <div>
              <div className="flex justify-center lg:justify-start py-5">
                <Image
                  src={work_img_2}
                  alt="work_image"
                  height={200}
                  width={320}
                />
              </div>
              <Link
                href={"#"}
                className="hover:text-[#C59D5F] transition-all duration-200"
              >
                APRIL 4, 2018
              </Link>
              <h2 className="py-3 md:py-5">
                <Link
                  href={"#"}
                  className="hover:text-[#C59D5F] text-2xl font-semibold transition-all duration-200 uppercase"
                >
                  How to curl hair
                </Link>
              </h2>
              <p className="text-lg md:text-[1rem] leading-[30px]">
                Lorem ipsum dolor sit amet, consectetur adicing elit ut
                ullamcorper. leo, eget euismod orci. Cum sociis natoque penati
              </p>
              <div className="py-5">
                <Link
                  href={"#"}
                  className="text-[#C59D5F] text-xl border-b-2 pb-1 border-[#C59D5F] hover:border-[#7a7878]  transition-all duration-300 uppercase"
                >
                  read more
                </Link>
              </div>
            </div>
            <div>
              <div className="flex justify-center lg:justify-start py-5">
                <Image
                  src={work_img_3}
                  alt="work_image"
                  height={200}
                  width={320}
                />
              </div>
              <Link
                href={"#"}
                className="hover:text-[#C59D5F] transition-all duration-200"
              >
                APRIL 4, 2018
              </Link>
              <h2 className="py-3 md:py-5">
                <Link
                  href={"#"}
                  className="hover:text-[#C59D5F] text-2xl font-semibold transition-all duration-200 uppercase"
                >
                  How to curl hair
                </Link>
              </h2>
              <p className="text-lg md:text-[1rem] leading-[30px]">
                Lorem ipsum dolor sit amet, consectetur adicing elit ut
                ullamcorper. leo, eget euismod orci. Cum sociis natoque penati
              </p>
              <div className="py-5">
                <Link
                  href={"#"}
                  className="text-[#C59D5F] text-xl border-b-2 pb-1 border-[#C59D5F] hover:border-[#7a7878]  transition-all duration-300 uppercase"
                >
                  read more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Work;
