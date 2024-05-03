import logo from "../assets/logo.svg";
import hamburgerIcon from "../assets/icon-hamburger.svg";
import closeIcon from "../assets/icon-close.svg";
import navlinks from "../data/navlinks";

import { useState } from "react";
import NavItem from "./NavItem";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <header className="absolute z-20 w-full px-6 py-12">
      <div className="flex justify-between">
        <div>
          <img src={logo} alt="blogr logo" />
        </div>
        <div className="md:hidden">
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

      <nav>
        {/* Mobile Navigation */}
        {isOpen && (
          <div className="relative z-20 my-8 w-full space-y-6 rounded-lg bg-white p-6 text-center font-Overpass text-xl font-semibold text-VeryDarkBlue">
            {navlinks.map(({ id, title, subItems }) => (
              <ul key={id}>
                <NavItem title={title} subItems={subItems} />
              </ul>
            ))}
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
        <div className="hidden md:inline-block">
          {navlinks.map(({ id, title, subItems }) => (
            <ul key={id}>
              <NavItem title={title} subItems={subItems} />
            </ul>
          ))}
          <div>
            <button>Login</button>
            <button>Sign Up</button>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Header;
