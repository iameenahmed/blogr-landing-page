import { useState } from "react";
import arrowIconDark from "../assets/icon-arrow-dark.svg";
import arrowIconLight from "../assets/icon-arrow-light.svg";

interface NavItemProps {
  title: string;
  subItems: string[];
}

const NavItem = ({ title, subItems }: NavItemProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <li>
        <button onClick={() => setIsOpen(!isOpen)}>{title}</button>
      </li>
      {isOpen && (
        <li>
          <ul>
            {subItems.map((subItem) => (
              <li key={subItem}>{subItem}</li>
            ))}
          </ul>
        </li>
      )}
    </>
  );
};
export default NavItem;
