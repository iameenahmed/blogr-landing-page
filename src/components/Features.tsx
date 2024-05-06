import laptop from "../assets/illustration-laptop-desktop.svg";
import laptopMobile from "../assets/illustration-laptop-mobile.svg";

const Features = () => {
  return (
    <div className="mx-auto my-16 max-w-[35rem] text-center text-VeryDarkBlue lg:my-64 lg:-ml-[7.25vw] lg:grid lg:max-w-full lg:grid-cols-2 lg:text-start xl:mr-[11.25vw] xl:gap-32">
      <picture className="lg:scale-[1.54]">
        <source media="(min-width: 968px)" srcSet={laptop} />
        <img src={laptopMobile} alt="laptop illustration" className="w-full" />
      </picture>
      <div className="px-8 lg:pl-[5.25rem]">
        <div className="my-8 lg:mt-0 xl:my-12">
          <h5 className="mb-6 text-[1.7rem] font-semibold text-VeryDarkBlue">
            Free, open, simple
          </h5>
          <p className="tracking-wide text-VeryDarkGrayishBlue xl:leading-[1.75]">
            Blogr is a free and open source application backed by a large
            community of helpful developers. It supports features such as code
            syntax highlighting, RSS feeds, social media integration,
            third-party commenting tools, and works seamlessly with Google
            Analytics. The architecture is clean and is relatively easy to
            learn.
          </p>
        </div>
        <div className="xl:mt-[4.5rem]">
          <h5 className="mb-5 text-[1.7rem] font-semibold text-VeryDarkBlue">
            Powerful tooling
          </h5>
          <p className="tracking-wide text-VeryDarkGrayishBlue xl:leading-[1.75]">
            Batteries included. We built a simple and straightforward CLI tool
            that makes customization and deployment a breeze, but capable of
            producing even the most complicated sites.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Features;
