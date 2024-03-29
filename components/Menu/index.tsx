import React from "react";
import Link from "next/link";

interface MenuProps {
  list: {
    link: string;
    textContent: string;
  }[];
}

const Menu: React.FC<MenuProps> = ({ list }) => {
  const [isMenuOpen, setMenuOpen] = React.useState(false);

  const handleMenuOpen = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={handleMenuOpen}
        className="absolute top-[2px] md:top-[6px] left-[3px] md:left-[15px] menu material-symbols-rounded"
      >
        menu
      </button>
      <div
        className={`transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-[150%]"
        } absolute top-0 left-0 transition-transform duration-300 ease-in-out bg-black border border-primary-color px-[30px] py-[40px] z-[10] md:px-[61px] md:py-[65px]`}
      >
        <div className="flex items-start gap-[20px]">
          <ul className="text-[18px] md:text-[20px] font-medium flex flex-col gap-[30px] md:gap-[40px] w-[140px]">
            {list.map((item, index) => (
              <li
                className="white transition duration-300 ease-in-out hover:text-main-primary-color"
                key={item.textContent + index}
              >
                <Link href={item.link} className="text-left" onClick={handleMenuOpen}>
                  {item.textContent}
                </Link>
              </li>
            ))}
          </ul>
          <button
            onClick={handleMenuOpen}
            className="close transition duration-300 ease-in-out hover:text-main-primary-color material-symbols-outlined"
          >
            close
          </button>
        </div>
      </div>
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 z-[7]`}
        onClick={handleMenuOpen}
      ></div>
    </div>
  );
};

export default Menu;
