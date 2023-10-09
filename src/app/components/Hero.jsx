import { Carousel } from "@material-tailwind/react";


export default function Home() {
  return (
    <Carousel
      className="rounded-none   brightness-50 max-h-[60rem] overflow-hidden  w-full"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      <img
        src="https://duruthemes.com/demo/html/perukar/multipage-slider/img/slider/3.jpg"
        alt="image 1"
        className="h-full w-full object-cover"
      />
     
    </Carousel>
  );
}
