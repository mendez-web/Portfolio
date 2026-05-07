const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* bg-image */}
      <div className="relative min-w-screen min-h-screen flex items-center justify-center overflow-hidden">
        <img
          src="/my picture.png"
          alt=""
          className="z-5 size-100 object-cover absolute"
        />
        <h1 className="absolute text-[10rem] z-4 hollow-text -translate-y-20">
          EUGENE
        </h1>
        <h1 className="absolute z-3 text-[10rem] translate-y-20 text-secondary">
          MENDEZ
        </h1>
      </div>
    </section>
  );
};

export default Hero;
