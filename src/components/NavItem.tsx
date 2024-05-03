import { useState } from "react";

interface NavItemProps {
  title: string;
  subItems: string[];
}

const NavItem = ({ title, subItems }: NavItemProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <li
        className={`after:bg-arrowDark relative after:absolute after:bottom-1/3 after:ms-2 after:h-[7px] after:w-[10px] ${
          isOpen ? "after:rotate-180" : "after:rotate-0"
        }`}
      >
        <button onClick={() => setIsOpen(!isOpen)}>{title}</button>
      </li>
      {isOpen && (
        <li className="mt-4 rounded-lg bg-GrayishBlue/30 p-6 text-lg">
          <ul className="space-y-3">
            {subItems.map((subItem) => (
              <li key={subItem} className="cursor-pointer hover:opacity-70">
                {subItem}
              </li>
            ))}
          </ul>
        </li>
      )}
    </>
  );
};
export default NavItem;
