import laptop from "../assets/illustration-laptop-desktop.svg";
import laptopMobile from "../assets/illustration-laptop-mobile.svg";

const Features = () => {
  return (
    <div className="my-16 text-center text-VeryDarkBlue">
      <picture>
        <source media="(min-width: 968px)" srcSet={laptop} />
        <img src={laptopMobile} alt="laptop illustration" className="w-full" />
      </picture>
      <div className="px-8">
        <div className="my-8">
          <h5 className="mb-6 text-3xl font-semibold text-VeryDarkBlue">
            Free, open, simple
          </h5>
          <p className="text-VeryDarkGrayishBlue">
            Blogr is a free and open source application backed by a large
            community of helpful developers. It supports features such as code
            syntax highlighting, RSS feeds, social media integration,
            third-party commenting tools, and works seamlessly with Google
            Analytics. The architecture is clean and is relatively easy to
            learn.
          </p>
        </div>
        <div>
          <h5 className="mb-6 text-3xl font-semibold text-VeryDarkBlue">
            Powerful tooling
          </h5>
          <p className="text-VeryDarkGrayishBlue">
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
