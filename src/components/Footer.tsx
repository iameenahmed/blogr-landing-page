import logo from "../assets/logo.svg";
import navlinks from "../data/navlinks";

const Footer = () => {
  return (
    <footer>
      <div>
        <img src={logo} alt="blogr logo" />
      </div>
      <div>
        {navlinks.map(({ id, title, subItems }) => (
          <ul key={id}>
            <li>{title}</li>
            <li>
              <ul className="">
                {subItems.map((subItem, index) => (
                  <li key={index}>{subItem}</li>
                ))}
              </ul>
            </li>
          </ul>
        ))}
      </div>
    </footer>
  );
};
export default Footer;
