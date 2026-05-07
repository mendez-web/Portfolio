import { useContext, useEffect, useState } from "react";
import { BgContext } from "../App";

const ScrollAlert = () => {
  const [show, setShow] = useState(false);
  const background = useContext(BgContext);

  useEffect(() => {
    const interval = setInterval(() => {
      setShow(true);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return show ? (
    <div
      className={
        background === "white"
          ? "fixed bottom-4 left-1/2 transform -translate-x-1/2 text-gray-700 font-bold px-4 py-2 glass rounded-full animate-jump"
          : "fixed bottom-4 left-1/2 transform -translate-x-1/2 text-gray-200 font-bold px-4 py-2 glass-dark rounded-full animate-jump"
      }
    >
      Scroll For More
    </div>
  ) : null;
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* bg-image */}
      <div className="relative min-w-screen min-h-screen flex items-center justify-center overflow-hidden">
        <img
          src="/my picture.png"
          alt="a picture of a very handsome guy"
          className="z-5 size-120 object-cover absolute rounded-4xl"
        />
        <h1 className="absolute text-[15rem] font-bold z-4 -translate-y-20 hollow-text">
          EUGENE
        </h1>
        <h1 className="absolute z-3 text-[15rem] font-bold translate-y-25 text-primary-dark text-shadow-black">
          MENDEZ
        </h1>
      </div>
      <ScrollAlert />
    </section>
  );
};

export default Hero;
