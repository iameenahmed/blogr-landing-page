import { useState } from "react";

interface NavItemProps {
  title: string;
  subItems: string[];
}

const NavItem = ({ title, subItems }: NavItemProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <ul>
      <li
        className={`relative after:absolute after:bottom-1/3 after:ms-2 after:h-[7px] after:w-[10px] after:bg-arrowDark md:after:bg-arrowLight ${
          isOpen ? "after:rotate-180" : "after:rotate-0"
        }`}
      >
        <button onClick={() => setIsOpen(!isOpen)}>{title}</button>
      </li>
      {isOpen && (
        <li className="mt-4 rounded-lg bg-GrayishBlue/30 p-6 text-lg md:absolute md:bg-white md:px-12 md:py-8 md:text-VeryDarkGrayishBlue">
          <ul className="space-y-3">
            {subItems.map((subItem) => (
              <li key={subItem} className="cursor-pointer hover:opacity-70">
                {subItem}
              </li>
            ))}
          </ul>
        </li>
      )}
    </ul>
  );
};
export default NavItem;
