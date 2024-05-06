import editor from "../assets/illustration-editor-desktop.svg";
import editorMobile from "../assets/illustration-editor-mobile.svg";

const Intro = () => {
  return (
    <div className="relative mx-auto my-20 text-center text-VeryDarkBlue md:max-w-[35rem] lg:my-28 lg:max-w-full lg:pl-[6vw] lg:text-start xl:pl-[11.5vw]">
      <div className="lg:relative lg:left-[28%] xl:top-9">
        <h2 className="text-[1.75rem] font-semibold md:text-[2.3rem]">
          Designed for the future
        </h2>
      </div>
      <div className="mt-12 lg:-mr-[12vw] lg:flex lg:flex-row-reverse lg:items-center xl:mt-0">
        <picture className="lg:basis-1/2 lg:scale-[1.275]">
          <source media="(min-width: 1280px)" srcSet={editor} />
          <img
            src={editorMobile}
            alt="editor illustration"
            className="w-full"
          />
        </picture>
        <div className="px-8 lg:basis-1/2 lg:pl-0 lg:pr-16 xl:mt-7 xl:pr-48">
          <div className="my-8 md:my-16 lg:my-6 xl:mb-16 xl:mt-0">
            <h3 className="mb-6 text-[1.725rem] font-semibold text-VeryDarkBlue">
              Introducing an extensible editor
            </h3>
            <p className="tracking-wide text-VeryDarkGrayishBlue/80 xl:leading-[1.75]">
              Blogr features an exceedingly intuitive interface which lets you
              focus on one thing: creating content. The editor supports
              management of multiple blogs and allows easy manipulation of
              embeds such as images, videos, and Markdown. Extensibility with
              plugins and themes provide easy ways to add functionality or
              change the looks of a blog.
            </p>
          </div>
          <div>
            <h3 className="mb-6 text-[1.725rem] font-semibold text-VeryDarkBlue">
              Robust content management
            </h3>
            <p className="tracking-wide text-VeryDarkGrayishBlue/80 xl:leading-[1.75]">
              Flexible content management enables users to easily move through
              posts. Increase the usability of your blog by adding customized
              categories, sections, format, or flow. With this functionality,
              you’re in full control.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Intro;
