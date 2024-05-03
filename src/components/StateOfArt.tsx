import phones from "../assets/illustration-phones.svg";

const StateOfArt = () => {
  return (
    <div>
      <div className="relative z-20 -mb-[55%]">
        <img src={phones} alt="phones illustration" />
      </div>
      <div className="after:bg-circles relative space-y-6 overflow-hidden rounded-bl-[6rem] rounded-tr-[6rem] bg-secondary-gradient px-8 pb-28 pt-52 text-center text-white after:absolute after:inset-0 after:z-10 after:bg-cover after:bg-top after:bg-no-repeat">
        <h4 className="relative z-20 text-4xl font-semibold">
          State of the Art Infrastructure
        </h4>
        <p className="relative z-20 text-GrayishBlue">
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
