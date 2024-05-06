import logo from "../assets/logo.svg";
import navlinks from "../data/navlinks";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center rounded-tr-[6rem] bg-VeryDarkBlackBlue py-20 lg:flex-row lg:items-start lg:px-[11.5vw]">
      <div className="mb-16 lg:basis-1/4">
        <img src={logo} alt="blogr logo" />
      </div>
      <div className="mt-1 space-y-8 text-center lg:grid lg:basis-3/4 lg:grid-cols-3 lg:gap-8 lg:space-y-0 lg:text-start">
        {navlinks.map(({ id, title, subItems }) => (
          <ul key={id} className="space-y-7">
            <li className="text-white">{title}</li>
            <li>
              <ul className="space-y-1 text-GrayishBlue lg:space-y-2.5">
                {subItems.map((subItem, index) => (
                  <li key={index} className="cursor-pointer hover:opacity-70">
                    {subItem}
                  </li>
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
