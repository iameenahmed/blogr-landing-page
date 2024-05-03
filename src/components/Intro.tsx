import editor from "../assets/illustration-editor-desktop.svg";
import editorMobile from "../assets/illustration-editor-mobile.svg";

const Intro = () => {
  return (
    <div className="my-20 text-center text-VeryDarkBlue">
      <div>
        <h2 className="text-[1.75rem] font-semibold">
          Designed for the future
        </h2>
      </div>
      <div className="mt-8">
        <picture>
          <source media="(min-width: 968px)" srcSet={editor} />
          <img
            src={editorMobile}
            alt="editor illustration"
            className="w-full"
          />
        </picture>
        <div className="px-8">
          <div className="my-8">
            <h3 className="mb-6 text-3xl font-semibold text-VeryDarkBlue">
              Introducing an extensible editor
            </h3>
            <p className="text-VeryDarkGrayishBlue">
              Blogr features an exceedingly intuitive interface which lets you
              focus on one thing: creating content. The editor supports
              management of multiple blogs and allows easy manipulation of
              embeds such as images, videos, and Markdown. Extensibility with
              plugins and themes provide easy ways to add functionality or
              change the looks of a blog.
            </p>
          </div>
          <div>
            <h3 className="mb-6 text-3xl font-semibold text-VeryDarkBlue">
              Robust content management
            </h3>
            <p className="text-VeryDarkGrayishBlue">
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
