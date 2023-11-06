import Link from "next/link";

export default function Home() {
  return (
    <div className="bg_img w-full py-40 h-[85vh]  ">
      <div className="container mx-auto ">
        <div className="text-white md:mt-[4rem] text-left hidden lg:block ">
        
          <h2 className="text-xl md:text-4xl leading-loose xl:text-6xl font-co font-bold py-2    lg:py-4  ">
            HairCuts Express llc
            <span className="block mt-4">For Women Men</span>
            <span className="block mt-4">Man and Kids</span>
          </h2>

          <Link href={`/choose`}>
            <button className="  bg-[#C28565] text-white transition-all duration-300   text-sm   px-8 py-3 md:px-12 md:py-4 mt-8  ">
              Our Great Service
            </button>
          </Link>
        </div>

        <div className="text-white mt-[10rem] text-center block lg:hidden ">
         
          <h2 className="text-xl md:text-4xl font-co xl:text-6xl font-bold py-2    lg:py-4 tracking-[1px]">
            HairCuts Express For Women <br /> Man and Kids
          </h2>

          <Link href={`/choose`}>
            <button className="  bg-[#C28565] text-white transition-all duration-300   text-sm   px-6 py-2 font-dm md:px-10 md:py-4 mt-10  ">
              Explore Service
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
