import logo from "../assets/logo.svg";
import navlinks from "../data/navlinks";

const Footer = () => {
  return (
    <footer className="grid place-content-center rounded-tr-[6rem] bg-VeryDarkBlackBlue py-16">
      <div className="mb-16">
        <img src={logo} alt="blogr logo" />
      </div>
      <div className="space-y-8 text-center">
        {navlinks.map(({ id, title, subItems }) => (
          <ul key={id} className="space-y-7">
            <li className="text-white">{title}</li>
            <li>
              <ul className="space-y-1 text-GrayishBlue">
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
