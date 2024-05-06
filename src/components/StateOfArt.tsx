import phones from "../assets/illustration-phones.svg";

const StateOfArt = () => {
  return (
    <div className="relative rounded-bl-[6rem] rounded-tr-[6rem] bg-secondary-gradient after:absolute after:inset-0 after:z-0 after:bg-circles after:bg-auto after:bg-[-45%_90%] after:bg-no-repeat lg:grid lg:grid-cols-2 lg:place-items-center xl:my-36 xl:px-[6vw]">
      <div className="relative z-10 -mb-28 -mt-[4rem]">
        <img src={phones} alt="phones illustration" className="w-full" />
      </div>
      <div className="relative z-10 mx-auto space-y-6 px-6 text-center tracking-wide text-white lg:mt-7 lg:max-w-full lg:pl-4 lg:pr-20 lg:text-left">
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
