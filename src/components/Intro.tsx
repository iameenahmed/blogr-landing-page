import editor from "../assets/illustration-editor-desktop.svg";
import editorMobile from "../assets/illustration-editor-mobile.svg";

const Intro = () => {
  return (
    <div className="relative mx-auto my-20 max-w-[30rem] text-VeryDarkBlue lg:my-28 lg:max-w-full lg:pl-[11.5vw]">
      <div className="relative left-[28%] top-9">
        <h2 className="text-[1.75rem] font-semibold xl:text-[2.3rem]">
          Designed for the future
        </h2>
      </div>
      <div className="mt-8 lg:mt-0 xl:-mr-[12vw] xl:flex xl:flex-row-reverse xl:items-center">
        <picture className="md:basis-1/2 xl:scale-[1.275]">
          <source media="(min-width: 1280px)" srcSet={editor} />
          <img
            src={editorMobile}
            alt="editor illustration"
            className="w-full"
          />
        </picture>
        <div className="px-8 lg:mt-7 lg:basis-1/2 lg:px-0 xl:pr-56">
          <div className="mb-8 lg:mb-16">
            <h3 className="mb-6 text-[1.725rem] font-semibold text-VeryDarkBlue">
              Introducing an extensible editor
            </h3>
            <p className="text-VeryDarkGrayishBlue lg:leading-[1.75]">
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
            <p className="text-VeryDarkGrayishBlue lg:leading-[1.75]">
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
