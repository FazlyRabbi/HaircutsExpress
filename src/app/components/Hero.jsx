import Link from "next/link";

export default function Home() {
  return (
    <div className="bg_img w-full py-40 h-[80vh]  ">
      <div className="container mx-auto px-4">
        <div className="text-white text-center">
          <h2 className="text-2xl md:text-6xl font-bold py-2 mt-[9rem]  lg:py-4 tracking-[1px]">
            HairCuts Express LLC For WOMAN <br /> MAN and KIDS
          </h2>
          <p className=" lg:text-lg">Hair -Skincare _Nails _Makeup</p>

          <Link href={`/choose`}>
            <button className="  hover:bg-[#BF9456] hover:text-white transition-all duration-300   text-sm text-[#BF9456] border border-[#BF9456] px-10 py-4 mt-8  ">
              Our Great Service
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
