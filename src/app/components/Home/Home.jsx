"use client";
import React from "react";
import Image from "next/image";
import img1 from "../../img/img1.jpg";
import img2 from "../../img/img2.jpg";
import img3 from "../../img/img3.jpg";
import GoogleMapReact from "google-map-react";
import { Input, Textarea } from "@material-tailwind/react";
import Header from "../Header";
const AnyReactComponent = ({ text }) => <div>{text}</div>;

const defaultProps = {
  center: {
    lat: 10.99835602,
    lng: 77.01502627,
  },
  zoom: 11,
};

function Home() {
  return (
    <section>
      <Header />
      {/* hero sections start */}
      <div className="bg-gray-300">
        <div className="container mx-auto">
          <div className="hero py-[10rem] px-2">
            <p>hero sections</p>
          </div>
        </div>
      </div>
      {/* hero sections end */}
      {/* our story secton start */}
      <div className="bg-[#587482] p-10">
        <div className="container mx-auto">
          <div className="hero py-[6rem] gap-x-10 bg-white px-[8rem]   grid  grid-cols-1 xl:grid-cols-2 items-center gap-y-10 xl:gap-y-0   justify-items-center">
            <div className="left">
              <Image src={img1} height="300" width="300" alt="img" />
            </div>
            <div className="right  text-center">
              <div className="top__contetn mb-5">
                <h1 className=" text-4xl  font-semibold">Timothy John Salon</h1>
                <hp className=" text-sm    tracking-widest">
                  {" "}
                  Lorem ipsum dolor sit amet.
                </hp>
              </div>
              <p className="  text-gray-600 md:px-10  text-sm md:text-lg">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo eos
                ex ratione saepe, velit mollitia tempora ea voluptatibus odit
                doloremque distinctio magnam sunt similique quisquam delectus
                accusamus atque quas laboriosam. Incidunt sint quidem molestias,
                quod nisi laboriosam eveniet ad et.
              </p>
              <button className=" mt-4 bg-black px-8 py-2 text-white">
                Our Story
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* our story secton end */}
      {/* Blog secton start */}
      <div className="bg-[#fff] p-10">
        <div className="container mx-auto">
          <h1 className=" text-4xl  font-semibold text-center py-4">
            The Timothy Jhon Salon Diffrence
          </h1>

          <div className=" grid mt-8  gap-x-10 gap-y-10   xl:gap-y-0 grid-cols-1 xl:grid-cols-2   justify-center   justify-items-center">
            <div>
              <Image
                src={img2}
                height="300"
                width="300"
                className="w-full  h-[27rem]"
                alt="img"
              />
              <div className="content py-4">
                <h4 className=" font-semibold  text-gray-800">
                  Lorem ipsum dolor sit.
                </h4>
                <p className=" leading-tight pr-10">
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                  perferendis ratione quisquam? Facilis voluptate quod beatae
                  dolorum itaque, nihil.
                </p>
                <button className="  uppercase mt-4 bg-black px-8 py-2 text-white">
                  See Our Crew
                </button>
              </div>
            </div>
            <div>
              <Image
                src={img3}
                height="300"
                width="300"
                className="w-full  h-[27rem]"
                alt="img"
              />
              <div className="content py-4">
                <h4 className=" font-semibold  text-gray-800">
                  Lorem ipsum dolor sit.
                </h4>
                <p className=" leading-tight pr-10">
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                  perferendis ratione quisquam? Facilis voluptate quod beatae
                  dolorum itaque, nihil.
                </p>
                <button className="  uppercase mt-4 bg-black px-8 py-2 text-white">
                  See Our Crew
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Blog secton end */}
      {/* Map secton start */}
      <div className="" style={{ height: "25rem", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
        </GoogleMapReact>
      </div>
      {/* Map secton end */}
      {/* conttact secton start */}
      <div className="bg-[#000] ">
        <div className="container mx-auto">
          <div className=" grid grid-cols-1 gap-x-8 xl:grid-cols-2">
            <div>
              <form>
                <div className="py-10">
                  <Input
                    variant="standard"
                    label="Name"
                    className="   text-black "
                  />
                  <Input
                    variant="standard"
                    label="Email"
                    className="mb-2  text-black "
                  />
                  <Input
                    variant="standard"
                    label="Phone Number"
                    className="mb-2 text-black"
                  />
                  <Textarea
                    variant="standard"
                    label="Comments"
                    className="  mt-5"
                  />
                </div>
              </form>
            </div>
            <div className="bg-white"></div>
          </div>
        </div>
      </div>
      {/* Contaact secton end */}
    </section>
  );
}

export default Home;
