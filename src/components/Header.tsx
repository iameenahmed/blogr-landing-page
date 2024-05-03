import logo from "../assets/logo.svg";
import hamburgerIcon from "../assets/icon-hamburger.svg";
import closeIcon from "../assets/icon-close.svg";
import navlinks from "../data/navlinks";

import { useState } from "react";
import NavItem from "./NavItem";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <header>
      <div>
        <div>
          <img src={logo} alt="blogr logo" />
        </div>
        <div>
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
          <div>
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
