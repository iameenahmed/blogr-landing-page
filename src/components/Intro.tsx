import editor from "../assets/illustration-editor-desktop.svg";
import editorMobile from "../assets/illustration-editor-mobile.svg";

const Intro = () => {
  return (
    <div>
      <div>
        <h2>Designed for the future</h2>
      </div>
      <div>
        <picture>
          <source media="(min-width: 968px)" srcSet={editor} />
          <img src={editorMobile} alt="editor illustration" />
        </picture>
        <div>
          <div>
            <h3>Introducing an extensible editor</h3>
            <p>
              Blogr features an exceedingly intuitive interface which lets you
              focus on one thing: creating content. The editor supports
              management of multiple blogs and allows easy manipulation of
              embeds such as images, videos, and Markdown. Extensibility with
              plugins and themes provide easy ways to add functionality or
              change the looks of a blog.
            </p>
          </div>
          <div>
            <h3>Robust content management</h3>
            <p>
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
