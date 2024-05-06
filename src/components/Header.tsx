import logo from "../assets/logo.svg";
import hamburgerIcon from "../assets/icon-hamburger.svg";
import closeIcon from "../assets/icon-close.svg";
import navlinks from "../data/navlinks";

import { useState } from "react";
import NavItem from "./NavItem";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [openNavItem, setOpenNavItem] = useState<string | null>(null);

  return (
    <header className="absolute z-20 w-full gap-x-16 px-6 py-[3.75rem] md:px-[11.55vw] lg:flex lg:items-center">
      <div className="flex justify-between">
        <div className="w-[6.25rem]">
          <img src={logo} alt="blogr logo" className="w-full" />
        </div>
        <div className="lg:hidden">
          {isOpen ? (
            <img
              src={closeIcon}
              alt="close icon"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <img
              src={hamburgerIcon}
              alt="hamburger icon"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      <nav className="w-full font-Overpass font-semibold">
        {/* Mobile Navigation */}
        {isOpen && (
          <div className="relative z-20 my-8 w-full space-y-6 rounded-lg bg-white p-6 text-center text-xl text-VeryDarkBlue  lg:hidden">
            <ul className="space-y-6">
              {navlinks.map(({ id, title, subItems }) => (
                <li key={id}>
                  <NavItem
                    title={title}
                    subItems={subItems}
                    isOpen={openNavItem === title}
                    onOpen={() => setOpenNavItem(title)}
                  />
                </li>
              ))}
            </ul>
            <hr />
            <div className="flex flex-col items-center gap-y-4">
              <button className="cursor-pointer hover:opacity-70">Login</button>
              <button className="cursor-pointer rounded-full bg-primary-gradient px-12 py-3 text-white transition-opacity duration-300 hover:opacity-70">
                Sign Up
              </button>
            </div>
          </div>
        )}
        {/* Desktop Navigation */}
        <div className="hidden text-white lg:flex lg:items-center lg:justify-between">
          <ul className="flex gap-x-14">
            {navlinks.map(({ id, title, subItems }) => (
              <li key={id}>
                <NavItem
                  title={title}
                  subItems={subItems}
                  isOpen={openNavItem === title}
                  onOpen={() => setOpenNavItem(title)}
                />
              </li>
            ))}
          </ul>
          <div className="ms-8 space-x-4 font-Ubuntu">
            <button className="rounded-full border border-transparent px-5 py-2.5 transition-colors duration-300 hover:border-white">
              Login
            </button>
            <button className="rounded-full bg-white px-9 py-3 text-LightRed transition-colors duration-300 hover:bg-VeryLightRed hover:text-white">
              Sign Up
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Header;
