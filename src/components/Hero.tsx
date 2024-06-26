const Hero = () => {
  return (
    <div className="relative left-0 right-0 top-0 overflow-hidden rounded-bl-[6rem] bg-primary-gradient px-7 pb-40 pt-52 text-center text-white before:absolute before:inset-0 before:bg-hero-pattern-mobile before:bg-[35%_35%] before:bg-no-repeat lg:before:bg-hero-pattern lg:before:bg-[25%_50%] xl:pt-60">
      <div className="relative z-10">
        <h1 className="text-4xl font-medium leading-tight xl:text-6xl">
          A modern publishing platform
        </h1>
        <p className="mt-4 text-lg opacity-70 xl:mt-6 xl:text-xl">
          Grow your audience and build your online brand
        </p>
      </div>
      <div className="relative z-10 mt-11 space-x-4 font-Ubuntu font-bold">
        <button className="rounded-full bg-white px-4 py-3 text-LightRed transition-colors duration-300 hover:bg-VeryLightRed hover:text-white">
          Start for Free
        </button>
        <button className="rounded-full border border-white px-6 py-2.5 transition-colors duration-300 hover:bg-white hover:text-LightRed">
          Learn More
        </button>
      </div>
    </div>
  );
};
export default Hero;
