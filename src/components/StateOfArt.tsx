import phones from "../assets/illustration-phones.svg";

const StateOfArt = () => {
  return (
    <div className="relative mt-72 rounded-bl-[6rem] rounded-tr-[6rem] bg-secondary-gradient py-28 after:absolute after:inset-0 after:z-0 after:bg-circles after:bg-auto after:bg-[50%_100%] after:bg-no-repeat md:px-[6vw] lg:my-36 lg:grid lg:grid-cols-2 lg:place-items-center lg:py-0 lg:after:bg-[-45%_90%]">
      <div className="relative z-10 -mt-80 lg:-mb-28 lg:-mt-[4rem]">
        <img src={phones} alt="phones illustration" className="w-full" />
      </div>
      <div className="relative z-10 space-y-6 px-6 text-center tracking-wide text-white lg:mt-7 lg:pl-4 lg:text-left xl:pr-20">
        <h4 className="text-4xl font-semibold">
          State of the Art Infrastructure
        </h4>
        <p className="leading-[1.75] text-GrayishBlue">
          With reliability and speed in mind, worldwide data centers provide the
          backbone for ultra-fast connectivity. This ensures your site will load
          instantly, no matter where your readers are, keeping your site
          competitive.
        </p>
      </div>
    </div>
  );
};
export default StateOfArt;
